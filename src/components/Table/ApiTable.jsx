import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { DASHBOARD_API_FORM, DELETE_API } from '../../routes/routes'
import { useSessionStorage } from '../../hooks/useSessionStorage'
import showToastMessages from '../../libs/showToastMessages'
import DeleteModal from '../Modal/DeleteModal'
import ApiDetailsModal from '../Modal/ApiDetailsModal'
import EyeIcon from '../../icons/Eye'
import EditIcon from '../../icons/Edit'
import TrashIcon from '../../icons/Trash'
import handleErrors from '../../libs/handleErrors'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function ApiTable({ data, setData }) {
  const [openDetailsModal, setOpenDetailsModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [api, setApi] = useState(null)
  const { getItem } = useSessionStorage()
  const { getUserRole } = useContext(AuthContext)

  const handleDetailsModal = (service) => {
    setOpenDetailsModal(true)
    setApi(service)
  }
  const handleDeleteModal = (service) => {
    setOpenDeleteModal(true)
    setApi(service)
  }

  const handleDelete = async (id) => {
    try {
      const credentials = JSON.parse(getItem('user'))

      const response = await axios.delete(
        `${DELETE_API}/${id}/${credentials.token}`
      )
      if (response.status === 200) {
        showToastMessages({
          title: response.data.message,
          description: response.data.description,
          type: 'success',
          duration: 2000
        })
        setData(data.filter((d) => d.id !== response.data.data.id))
      }
    } catch (error) {
      handleErrors({ error })
    } finally {
      setOpenDeleteModal(false)
    }
  }

  return (
    <div className='relative overflow-x-auto sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-[15px] text-black font-bold uppercase bg-blue-100'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Nombre
            </th>
            <th scope='col' className='px-6 py-3'>
              Url
            </th>
            <th scope='col' className='px-6 py-3'>
              Método
            </th>
            {/* <th scope='col' className='px-6 py-3'>
              Fecha de creación
            </th>
            <th scope='col' className='px-6 py-3'>
              Fecha de actualización
            </th> */}
            <th scope='col' className='px-6 py-3 text-center'>
              Opciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((api) => (
            <tr key={api.id} className='border-b text-[14px] text-black'>
              <th
                scope='row'
                className='px-6 py-4 font-medium whitespace-nowrap'
              >
                {api.name}
              </th>
              <td className='px-6 py-4'>{api.url}</td>
              <td className='px-6 py-4'>{api.method}</td>
              <td className='px-6 py-4 flex justify-center items-center gap-x-2'>
                <span
                  onClick={() => handleDetailsModal(api)}
                  className='cursor-pointer text-blue-400 p-2 rounded-full hover:bg-blue-400 hover:text-white transition'
                >
                  <EyeIcon />
                </span>
                {getUserRole() === 'administrador' && (
                  <>
                    <Link
                      to={`${DASHBOARD_API_FORM}/${api.id}`}
                      className='cursor-pointer text-green-400 p-2 rounded-full hover:bg-green-400 hover:text-white transition'
                    >
                      <EditIcon />
                    </Link>
                    <span
                      onClick={() => handleDeleteModal(api)}
                      className='cursor-pointer text-red-400 p-2 rounded-full hover:bg-red-400 hover:text-white transition'
                    >
                      <TrashIcon />
                    </span>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ApiDetailsModal
        open={openDetailsModal}
        onClose={() => setOpenDetailsModal(false)}
        api={api}
      />
      <DeleteModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
      >
        <div className='w-[400px] text-center'>
          <TrashIcon styles={'size-20 text-red-500 mx-auto'} />
          <div className='mx-auto my-4 w-full'>
            <h3 className='text-gray-800 text-xl font-bold'>
              Confirmar eliminación
            </h3>
            <p className='text-sm text-gray-500'>
              ¿Estas seguro de eliminar la api{' '}
              <span className='font-bold'>{api?.name}</span> ?
            </p>
          </div>
          <div className='flex gap-4 justify-center'>
            <button
              onClick={() => handleDelete(api?.id)}
              className='bg-red-800 px-4 py-2 uppercase text-white hover:bg-red-600 transition rounded-md shadow'
            >
              Eliminar
            </button>
            <button
              onClick={() => setOpenDeleteModal(false)}
              className='bg-gray-200 px-4 py-2 uppercase text-gray-500 hover:bg-gray-300 transition rounded-md shadow'
            >
              Cancelar
            </button>
          </div>
        </div>
      </DeleteModal>
    </div>
  )
}
