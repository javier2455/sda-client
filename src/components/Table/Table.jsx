import Badge from '../Badge/Badge'
import EditIcon from '../../icons/Edit'
import TrashIcon from '../../icons/Trash'
import axios from 'axios'
import showToastMessages from '../../libs/showToastMessages'
import { useSessionStorage } from '../../hooks/useSessionStorage'

export default function Table({ data, setData }) {
  const { getItem } = useSessionStorage()


  const handleDelete = async (id) => {
    const credentials = JSON.parse(getItem('user'))

    const response = await axios.delete(
      `http://localhost:4001/user/delete_user/${id}/${credentials.token}`
    )
    if (response.status === 200) {
      console.log(response)
      showToastMessages({
        title: response.data.message,
        description: response.data.description,
        type: 'success',
        duration: 2000
      })
      setData(data.filter(d => d.id !== response.data.data.id))
    }
  }
  return (
    <div className='relative overflow-x-auto sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-[15px] text-black font-bold uppercase bg-gray-200'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Usuario
            </th>
            <th scope='col' className='px-6 py-3'>
              Correo
            </th>
            <th scope='col' className='px-6 py-3'>
              Rol
            </th>
            {/* <th scope='col' className='px-6 py-3'>
              Fecha de creación
            </th>
            <th scope='col' className='px-6 py-3'>
              Fecha de actualización
            </th> */}
            <th scope='col' className='px-6 py-3'>
              Opciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((u) => (
            <tr key={u.id} className='border-b text-[14px] text-black'>
              <th
                scope='row'
                className='px-6 py-4 font-medium whitespace-nowrap'
              >
                {u.username}
              </th>
              <td className='px-6 py-4'>{u.email}</td>
              <td className='px-6 py-4'>
                <Badge text={u.role} />
              </td>
              <td className='px-6 py-4 flex items-center gap-x-2'>
                <span className='cursor-pointer text-green-400 p-2 rounded-full hover:bg-green-400 hover:text-white transition'>
                  <EditIcon />
                </span>
                <span
                  onClick={() => handleDelete(u.id)}
                  className='cursor-pointer text-red-400 p-2 rounded-full hover:bg-red-400 hover:text-white transition'
                >
                  <TrashIcon />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
