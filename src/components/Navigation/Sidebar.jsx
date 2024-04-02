import { useContext } from 'react'
import Logout from '../../icons/Logout'
import UserCard from '../Card/UserCard'
import { AuthContext } from '../../context/AuthContext'

export default function Sidebar({ children }) {
  const { logout, profile } = useContext(AuthContext)
  const user = profile()
  return (
    <aside className='h-screen w-[20%]'>
      <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
        <div className='p-4 pb-2 flex flex-col justify-between items-center'>
          <h1 className='text-2xl mb-2 font-bold'>SDA</h1>
          <UserCard user={user}/>
          {/* <button className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
            arrow
          </button> */}
          <div className='border-t border-gray-300 w-[80%] mt-2 ' />
        </div>

        <ul className='flex-1 px-3'>{children}</ul>
        <div className='flex flex-col justify-center items-center p-3'>
          <div className='border-t border-gray-300 w-[80%] mb-2 ' />
          <button
            className='flex text-center px-4 py-2 rounded-md transition hover:bg-gray-200'
            onClick={() => logout()}
          >
            Cerrar Sesión
            <span className='ml-3'>
              <Logout />
            </span>
          </button>
        </div>
      </nav>
    </aside>
  )
}
