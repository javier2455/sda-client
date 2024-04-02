import { Link, useNavigate } from 'react-router-dom'
import DashBoardLayout from '../../layout/DashBoardLayout'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useSessionStorage } from '../../hooks/useSessionStorage'
import { useState } from 'react'
import showToastMessages from '../../libs/showToastMessages'
import handleErrors from '../../libs/handleErrors'

export default function UserForm() {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm()

  const { getItem } = useSessionStorage()
  const navigate = useNavigate()


  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true)
      const credentials = JSON.parse(getItem('user'))
      const response = await axios.post(
        `http://localhost:4001/user/create_user/${credentials.token}`,
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
          navigate('/dashboard/users')
        }, 2000)
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
          <h1 className='text-center text-2xl font-bold py-6'>
            Añadir nuevo usuario
          </h1>
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
                className={`bg-gray-200 text-gray-900 text-lg rounded-lg w-[60%] block border-none ring-0 focus:ring-1 focus:ring-blue-300 shadow-sm ${
                  errors.username &&
                  'ring-red-300 focus:ring-1 focus:ring-red-300'
                }`}
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
                className='bg-gray-200 text-gray-900 text-lg rounded-lg block w-[60%] border-none focus:ring-1 ring-0 ring-blue-300 shadow-sm'
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
                className='bg-gray-200 text-gray-900 text-lg rounded-lg block w-[60%] border-none focus:ring-1 ring-0 ring-blue-300 shadow-sm'
                placeholder='*******'
                {...register('password', {
                  required: {
                    value: true,
                    message: 'La contraseña es requerida'
                  }
                })}
              />
            </div>
            {/* <div className='flex justify-center items-center w-full'>
              <label
                htmlFor='confirm-password'
                className='w-[40%] font-semibold'
              >
                Confirmar Contraseña
                {errors.email && (
                  <span className='text-red-500 text-sm ml-2'>*</span>
                )}
              </label>
              <input
                type='password'
                id='confirm-password'
                className='bg-gray-200 text-gray-900 text-lg rounded-lg block w-[60%] border-none focus:ring-1 ring-0 ring-blue-300 shadow-sm'
                placeholder='*******'
              />
            </div> */}
            <div className='flex justify-center items-center w-full'>
              <label htmlFor='role' className='w-[40%] font-semibold'>
                Rol
                {errors.role && (
                  <span className='text-red-500 text-sm ml-2'>*</span>
                )}
              </label>
              <select
                name='role'
                className='bg-gray-200 text-gray-900 text-lg rounded-lg block w-[60%] border-none focus:ring-1 ring-0 ring-blue-300 shadow-sm'
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
                className='bg-blue-800 px-4 py-2 uppercase text-white hover:bg-blue-600 transition rounded-md shadow'
              >
                Aceptar
              </button>
              <Link
                to={'/dashboard/users'}
                className='bg-red-800 px-4 py-2 uppercase text-white hover:bg-red-600 transition rounded-md shadow'
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
