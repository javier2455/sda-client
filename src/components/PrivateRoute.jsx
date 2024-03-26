import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function PrivateRoute() {
  const { user } = useContext(AuthContext)
  if (!user?.token) return <Navigate to='/login' />
  return <Outlet />
}
