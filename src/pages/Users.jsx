import { useEffect } from 'react'
import Table from '../components/Table/Table'
import PlusIcon from '../icons/Plus'
import SearchIcon from '../icons/Search'
import DashBoardLayout from '../layout/DashBoardLayout'
import { useState } from 'react'
import { FetchData } from '../libs/fetchData'
import { useSessionStorage } from '../hooks/useSessionStorage'
import { Link } from 'react-router-dom'

export default function Users() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const { getItem } = useSessionStorage()

  useEffect(() => {
    const credentials = JSON.parse(getItem('user'))
    FetchData({
      url: `http://localhost:4001/user/get_all_users/${credentials.token}`,
      method: 'get',
      setLoading,
      setData
    })
  }, [])

  return (
    <DashBoardLayout>
      <section className='max-h-screen'>
        <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 my-4 '>
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
            <Link
              type='button'
              to={'/dashboard/users/form'}
              className='flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 font-bold rounded-lg text-lg px-4 py-2 transition shadow-sm'
            >
              Añadir Nuevo
              <span className='ml-1'>
                <PlusIcon />
              </span>
            </Link>
          </div>
        </div>
        <div className='w-full max-h-[450px] overflow-y-auto py-6 px-4 bg-white rounded-md shadow-lg'>
          {loading && <h1>Cargando los datos</h1>}
          {data ? <Table data={data} setData={setData}/> : <h1>No hay datos</h1>}
        </div>
      </section>
    </DashBoardLayout>
  )
}
