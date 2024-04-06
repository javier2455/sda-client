import { useForm } from 'react-hook-form'
import CloseIcon from '../../icons/Close'

export default function ApiHeaderModal({
  open,
  onClose,
  array,
  handleFunction
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    handleFunction([...array, data])
    onClose()
    reset()
  })

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? 'visible bg-black/20' : 'invisible'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation(e)}
        className={`bg-white rounded-xl shadow p-6 transition-all duration-300 ${
          open ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
      >
        <button
          onClick={onClose}
          className='absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700 transition'
        >
          <CloseIcon />
        </button>
        <div className='w-[400px] '>
          <div className='mx-auto my-4 w-full'>
            <h3 className='text-gray-800 text-xl text-center font-bold'>
              Añadir Cabecera {'(Header)'}
            </h3>
            <form onSubmit={onSubmit} className='my-2'>
              <div className='w-full mb-2'>
                <label
                  htmlFor='key'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Clave {'(Key)'}
                  {errors.key && (
                    <span className='text-red-500 text-sm ml-2'>*</span>
                  )}
                </label>
                <div className='mt-2'>
                  <input
                    id='key'
                    name='key'
                    type='text'
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    {...register('key', {
                      required: {
                        value: true,
                        message: 'La clave es requerida'
                      }
                    })}
                  />
                </div>
              </div>
              <div className='w-full mb-2'>
                <label
                  htmlFor='value'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Valor
                  {errors.value && (
                    <span className='text-red-500 text-sm ml-2'>*</span>
                  )}
                </label>
                <div className='mt-2'>
                  <input
                    id='value'
                    name='value'
                    type='text'
                    autoComplete='value'
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    {...register('value', {
                      required: {
                        value: true,
                        message: 'El valor es requerido'
                      }
                    })}
                  />
                </div>
              </div>
              <div className='flex gap-4 justify-center my-3'>
                <button
                  type='submit'
                  className='bg-blue-800 px-4 py-2 uppercase text-white hover:bg-blue-600 transition rounded-md shadow'
                >
                  Adicionar
                </button>
                <button
                  type='reset'
                  onClick={onClose}
                  className='bg-gray-300 px-4 py-2 uppercase text-gray-700 hover:bg-gray-400 transition rounded-md shadow'
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
