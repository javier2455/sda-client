import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthProvider from './context/AuthContext.jsx'
// import Home from './pages/Home.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Users from './pages/Users.jsx'
import Apis from './pages/Apis.jsx'
import { Toaster } from 'sonner'
import { Navigate } from 'react-router-dom'
import UserForm from './pages/Form/UserForm.jsx'
import ApiForm from './pages/Form/ApiForm.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route index path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/users' element={<Users />} />
            <Route path='/dashboard/users/form' element={<UserForm />} />
            <Route path='/dashboard/users/form/:id' element={<UserForm />} />
            <Route path='/dashboard/apis' element={<Apis />} />
            <Route path='/dashboard/apis/form/' element={<ApiForm />} />
            <Route path='/dashboard/apis/form/:id' element={<ApiForm />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
