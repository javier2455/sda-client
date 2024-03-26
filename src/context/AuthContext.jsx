import axios from 'axios'
import { createContext, useState } from 'react'
import handleErrors from '../libs/handleErrors'
import { useSessionStorage } from '../hooks/useSessionStorage'
import { useNavigate } from 'react-router-dom'
import showToastMessages from '../libs/showToastMessages'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const { setItem } = useSessionStorage()
  const navigate = useNavigate()

  const login = async ({ credentials }) => {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:4001/auth/login',
        data: credentials
      })
      if (response.status === 200) {
        console.log(response)
        showToastMessages({
          title: response.data.message,
          description: response.data.description,
          type: 'success'
        })
        setUser(response.data.data)
        setItem('user', response.data.data)
        setTimeout(() => {
          navigate('/dashboard')
        }, 2000)
      }
    } catch (error) {
      console.error(error)
      handleErrors({ error })
    }
  }
  const logout = () => {}

  const data = {
    user,
    setUser,
    login,
    logout
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export default AuthProvider

// const AuthContext = createContext()

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null)
//   //   const [token, setToken] = useState(localStorage.getItem('site') || '')
//   const navigate = useNavigate()

//   const loginAction = async (data) => {
//     try {
//       if (JSON.stringify(data)) {
//         const credentials = JSON.stringify(data)
//         credentials.token = true
//         setUser(credentials)
//         sessionStorage.setItem('user', JSON.stringify(credentials))
//         navigate('/dashboard')
//       }
//       //   const response = await fetch('http://localhost:4001/login', {
//       //     method: 'POST',
//       //     headers: {
//       //       'Content-Type': 'application/json'
//       //     },
//       //     body: JSON.stringify(data)
//       //   })
//       //   const res = await response.json()
//       //   if (res.data) {
//       //     setUser(res.data.user)
//       //     setToken(res.token)
//       //     setItem('user', user)
//       //     navigate('/dashboard')
//       //     return
//       //   }
//       throw new Error('No fincuono')
//     } catch (err) {
//       console.error(err)
//     }
//   }

//   const logOut = () => {
//     setUser(null)
//     // setToken('')
//     localStorage.removeItem('site')
//     navigate('/login')
//   }

//   return (
//     <AuthContext.Provider value={{ user, loginAction, logOut }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthProvider

// export const useAuth = () => {
//   return useContext(AuthContext)
// }
