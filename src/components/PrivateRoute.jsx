import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function PrivateRoute() {
  const { profile } = useContext(AuthContext)
  const user = profile()
  // console.log(user)
  if (!user?.token) return <Navigate to='/login' />
  return <Outlet />
}
