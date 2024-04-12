import { Link } from 'react-router-dom'
import PlusIcon from '../../icons/Plus'
import SearchIcon from '../../icons/Search'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function HeaderTable({ route }) {
  const { getUserRole } = useContext(AuthContext)

  return (
    <>
      <div className='w-full md:w-1/3'>
        <form className='flex items-center'>
          <label htmlFor='simple-search' className='sr-only'>
            Search
          </label>
          <div className='relative w-full'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400'>
              <SearchIcon />
            </div>
            <input
              type='text'
              id='simple-search'
              className='bg-gray-50 text-gray-600 text-lg rounded-lg block w-full pl-12 border-none focus:ring-0 ring-0 shadow-sm'
              placeholder='Buscar'
              required
            />
          </div>
        </form>
      </div>
      <div className='w-full md:w-1/2 flex justify-end'>
        {getUserRole() === 'administrador' && (
          <Link
            type='button'
            to={route}
            className='flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 font-bold rounded-lg text-lg px-4 py-2 transition shadow-sm'
          >
            Añadir
            <span className='ml-1'>
              <PlusIcon />
            </span>
          </Link>
        )}
      </div>
    </>
  )
}
