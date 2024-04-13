import { useEffect } from 'react'
import UserTable from '../components/Table/UserTable'
import DashBoardLayout from '../layout/DashBoardLayout'
import { useState } from 'react'
import { FetchData } from '../libs/fetchData'
import { useSessionStorage } from '../hooks/useSessionStorage'
import UserCountBoxCard from '../components/Card/CountBoxCard'
import { DASHBOARD_USER_FORM, GET_ALL_USERS } from '../routes/routes'
import HeaderTable from '../components/Table/HeaderTable'
import LoaderComponent from '../components/Loader/LoaderComponent'

export default function Users() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const { getItem } = useSessionStorage()

  useEffect(() => {
    const credentials = JSON.parse(getItem('user'))
    FetchData({
      url: `${GET_ALL_USERS}/${credentials.token}`,
      method: 'get',
      setLoading,
      setData
    })
  }, [])

  return (
    <DashBoardLayout>
      <section className='max-h-screen'>
        <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 my-4 '>
          <HeaderTable route={DASHBOARD_USER_FORM} />
        </div>
        <div className='relative w-full h-[450px] max-h-[450px] overflow-y-auto py-6 px-4 bg-white rounded-md shadow-lg'>
          {loading && <LoaderComponent />}
          {data && <UserTable data={data} setData={setData} />}
        </div>
        {data && (
          <UserCountBoxCard text={'Total de usuarios'} count={data.length} />
        )}
      </section>
    </DashBoardLayout>
  )
}
