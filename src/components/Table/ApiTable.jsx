import { Link } from 'react-router-dom'
import EditIcon from '../../icons/Edit'
import TrashIcon from '../../icons/Trash'
import { DASHBOARD_API_FORM } from '../../routes/routes'

export default function ApiTable({ data }) {
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
                {u.name}
              </th>
              <td className='px-6 py-4'>{u.url}</td>
              <td className='px-6 py-4'>{u.method}</td>
              <td className='px-6 py-4 flex items-center gap-x-2'>
                <Link
                  to={`${DASHBOARD_API_FORM}/${u.id}`}
                  className='cursor-pointer text-green-400 p-2 rounded-full hover:bg-green-400 hover:text-white transition'
                >
                  <EditIcon />
                </Link>
                <span
                  //   onClick={() => handleModal(u)}
                  className='cursor-pointer text-red-400 p-2 rounded-full hover:bg-red-400 hover:text-white transition'
                >
                  <TrashIcon />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <DeleteModal open={openModal} onClose={() => setOpenModal(false)}>
        <div className='w-[400px] text-center'>
          <TrashIcon styles={'size-20 text-red-500 mx-auto'} />
          <div className='mx-auto my-4 w-full'>
            <h3 className='text-gray-800 text-xl font-bold'>
              Confirmar eliminación
            </h3>
            <p className='text-sm text-gray-500'>
              ¿Estas seguro de eliminar al usuario{' '}
              <span className='font-bold'>{user?.username}</span> ?
            </p>
          </div>
          <div className='flex gap-4 justify-center'>
            <button
              onClick={() => handleDelete(user?.id)}
              className='bg-red-800 px-4 py-2 uppercase text-white hover:bg-red-600 transition rounded-md shadow'
            >
              Eliminar
            </button>
            <button
              onClick={() => setOpenModal(false)}
              className='bg-gray-200 px-4 py-2 uppercase text-gray-500 hover:bg-gray-300 transition rounded-md shadow'
            >
              Cancelar
            </button>
          </div>
        </div>
      </DeleteModal> */}
    </div>
  )
}
