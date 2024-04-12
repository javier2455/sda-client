import { Link, useNavigate, useParams } from 'react-router-dom'
import DashBoardLayout from '../../layout/DashBoardLayout'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useSessionStorage } from '../../hooks/useSessionStorage'
import { useState } from 'react'
import showToastMessages from '../../libs/showToastMessages'
import handleErrors from '../../libs/handleErrors'
import {
  CREATE_USER,
  DASHBOARD_USER,
  GET_USER_BY_ID,
  UPDATE_USER
} from '../../routes/routes'
import { useEffect } from 'react'
import { FetchData } from '../../libs/fetchData'

export default function UserForm() {
  const [loading, setLoading] = useState(false)
  const [titleForm, setTitleForm] = useState('Añadir Nuevo Usuario')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const { getItem } = useSessionStorage()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      const credentials = JSON.parse(getItem('user'))
      FetchData({
        url: `${GET_USER_BY_ID}/${id}/${credentials.token}`,
        method: 'get',
        setLoading,
        setData: reset
      })
      setTitleForm('Editar usuario')
    }
  }, [])

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true)
      const credentials = JSON.parse(getItem('user'))
      if (id) {
        const response = await axios.patch(
          `${UPDATE_USER}/${id}/${credentials.token}`,
          data
        )
        console.log(response)
        if (response.status === 200) {
          showToastMessages({
            title: response.data.message,
            description: response.data.description,
            type: 'success',
            duration: 2000
          })
          setTimeout(() => {
            navigate(DASHBOARD_USER)
          }, 2000)
        }
      } else {
        const response = await axios.post(
          `${CREATE_USER}/${credentials.token}`,
          data
        )
        console.log('this is the response', response)
        if (response.status === 201) {
          showToastMessages({
            title: response.data.message,
            description: response.data.description,
            type: 'success',
            duration: 2000
          })
          setTimeout(() => {
            navigate(DASHBOARD_USER)
          }, 2000)
        }
      }
    } catch (error) {
      handleErrors({ error })
    } finally {
      setLoading(false)
    }
  })

  return (
    <DashBoardLayout>
      <main className='my-10'>
        <div className='bg-white w-[80%] mx-auto shadow-md rounded-2xl'>
          <h1 className='text-center text-2xl font-bold py-6'>{titleForm}</h1>
          <form onSubmit={onSubmit} className='flex flex-col gap-y-4 px-8 mt-6'>
            <div className='flex justify-between items-center w-full'>
              <label htmlFor='username' className='w-[40%] font-semibold'>
                Nombre de usuario
                {errors.username && (
                  <span className='text-red-500 text-sm ml-2'>*</span>
                )}
              </label>
              <input
                type='text'
                id='username'
                name='username'
                className={`block w-[60%] rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-sm sm:text-md sm:leading-6 ${
                  loading && 'opacity-60'
                }`}
                disabled={loading}
                placeholder='Ladya.sandra'
                {...register('username', {
                  required: {
                    value: true,
                    message: 'El nombre de usuario es requerido'
                  }
                })}
              />
            </div>
            <div className='flex justify-center items-center w-full'>
              <label htmlFor='email' className='w-[40%] font-semibold'>
                Email
                {errors.email && (
                  <span className='text-red-500 text-sm ml-2'>*</span>
                )}
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className={`block w-[60%] rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-sm sm:text-md sm:leading-6 ${
                  loading && 'opacity-60'
                }`}
                disabled={loading}
                placeholder='Ladya.sandra@onat.gob.cu'
                {...register('email', {
                  required: {
                    value: true,
                    message: 'El correo es requerido'
                  }
                })}
              />
            </div>
            <div className='flex justify-center items-center w-full'>
              <label htmlFor='password' className='w-[40%] font-semibold'>
                Contraseña
                {errors.email && (
                  <span className='text-red-500 text-sm ml-2'>*</span>
                )}
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className={`block w-[60%] rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-sm sm:text-md sm:leading-6 ${
                  loading && 'opacity-60'
                }`}
                disabled={loading}
                placeholder='*******'
                {...register('password', {
                  required: {
                    value: true,
                    message: 'La contraseña es requerida'
                  }
                })}
              />
            </div>
            <div className='flex justify-center items-center w-full'>
              <label htmlFor='role' className='w-[40%] font-semibold'>
                Rol
                {errors.role && (
                  <span className='text-red-500 text-sm ml-2'>*</span>
                )}
              </label>
              <select
                name='role'
                className={`block w-[60%] rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-sm sm:text-md sm:leading-6 ${
                  loading && 'opacity-60'
                }`}
                disabled={loading}
                id='role'
                {...register('role', {
                  required: {
                    value: true,
                    message: 'El usuario debe tener un role asignado'
                  }
                })}
              >
                <option value=''>--Seleccione un rol--</option>
                <option value='usuario'>usuario</option>
                <option value='administrador'>administrador</option>
              </select>
            </div>
            <div className='flex justify-end items-center gap-x-4 my-6'>
              <button
                type='submit'
                className={`bg-blue-800 px-4 py-2 uppercase text-white hover:bg-blue-600 transition rounded-md shadow ${loading && 'opacity-60'}`}
                disabled={loading}
              >
                Aceptar
              </button>
              <Link
                to={DASHBOARD_USER}
                className={`bg-red-800 px-4 py-2 uppercase text-white hover:bg-red-600 transition rounded-md shadow ${loading && 'opacity-60'}`}
                disabled={loading}
              >
                <button type='reset'>Cancelar</button>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </DashBoardLayout>
  )
}
