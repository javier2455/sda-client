import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthProvider from './context/AuthContext.jsx'
// import Home from './pages/Home.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Users from './pages/Users.jsx'
import Apis from './pages/Apis.jsx'
import { Toaster } from 'sonner'

export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <AuthProvider>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/login' element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route index path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/users' element={<Users />} />
            <Route path='/dashboard/apis' element={<Apis />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}