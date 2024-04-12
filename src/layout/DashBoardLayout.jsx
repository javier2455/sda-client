import { useContext } from 'react'
import Sidebar from '../components/Navigation/Sidebar'
import SidebarItem from '../components/Navigation/SidebarItem'
import API from '../icons/API'
import Home from '../icons/Home'
import UsersGroup from '../icons/UsersGroup'
import { AuthContext } from '../context/AuthContext'

export default function DashBoardLayout({ children }) {
  const { getUserRole } = useContext(AuthContext)
  return (
    <main className='w-full flex'>
      <Sidebar>
        <SidebarItem
          icon={<Home />}
          url={'/dashboard'}
          text={'Inicio'}
          end={true}
        />
        {getUserRole() === 'administrador' && (
          <SidebarItem
            icon={<UsersGroup />}
            url={'/dashboard/users'}
            text={'Usuarios'}
          />
        )}
        <SidebarItem icon={<API />} url={'/dashboard/apis'} text={`APIs`} />
      </Sidebar>
      <section className='bg-blue-50 w-full px-8'>{children}</section>
    </main>
  )
}
