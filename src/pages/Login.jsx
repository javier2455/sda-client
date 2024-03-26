import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import LoginImageBackground from '../assets/background-login.webp'

export default function Login() {
  const [input, setInput] = useState({
    username: '',
    password: ''
  })

  const { login } = useContext(AuthContext)
  const handleSubmitEvent = (e) => {
    e.preventDefault()
    if (input.username !== '' && input.password !== '') {
      login({ credentials: input })
      return
    }
    alert('pleae provide a valid input')
  }

  const handleInput = (e) => {
    const { name, value } = e.target
    setInput((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <div
        className='relative flex min-h-screen bg-cover flex-1 flex-col justify-center px-6 py-12 lg:px-8'
        style={{ backgroundImage: `url(${LoginImageBackground})` }}
      >
        <div className='bg-white md:bg-inherit px-4 py-6 md:px-0 md:py-0 rounded-md shadow-xl md:shadow-none'>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <img
              className='mx-auto h-10 w-auto'
              src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
              alt='Your Company'
            />
            <h2 className='mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900'>
              Sistema de Documentación de APIs
            </h2>
          </div>

          <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form className='space-y-6' onSubmit={handleSubmitEvent}>
              <div>
                <label
                  htmlFor='username'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Usuario
                </label>
                <div className='mt-2'>
                  <input
                    id='username'
                    name='username'
                    type='text'
                    autoComplete='username'
                    required
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div>
                <div className='flex items-center justify-between'>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Contraseña
                  </label>
                  {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}
                </div>
                <div className='mt-2'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    required
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className='mt-10 text-center text-sm text-gray-500'>
              ONAT - Oficina Nacional de Administración Tributaria
              <span></span>
              {/* <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a> */}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
