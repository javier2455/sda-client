import { useState } from 'react'
import HeaderTable from '../components/Table/HeaderTable'
import DashBoardLayout from '../layout/DashBoardLayout'
import { DASHBOARD_API_FORM } from '../routes/routes'
import { useSessionStorage } from '../hooks/useSessionStorage'
import { FetchData } from '../libs/fetchData'
import { useEffect } from 'react'
import UserCountBoxCard from '../components/Card/CountBoxCard'
import ApiTable from '../components/Table/ApiTable'
import LoaderComponent from '../components/Loader/LoaderComponent'

export default function Apis() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const { getItem } = useSessionStorage()

  useEffect(() => {
    const credentials = JSON.parse(getItem('user'))
    FetchData({
      url: `http://localhost:4001/api/get_all_apis/${credentials.token}`,
      method: 'get',
      setLoading,
      setData
    })
  }, [])

  return (
    <DashBoardLayout>
      <section className='max-h-screen'>
        <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 my-4 '>
          <HeaderTable route={DASHBOARD_API_FORM} />
        </div>
        <div className='w-full h-[450px] max-h-[450px] overflow-y-auto py-6 px-4 bg-white rounded-md shadow-lg'>
        {loading && <LoaderComponent />}
          {data && <ApiTable data={data} setData={setData} />}
        </div>
        {data && (
          <UserCountBoxCard text={'Total de servicios'} count={data.length} />
        )}
      </section>
    </DashBoardLayout>
  )
}
