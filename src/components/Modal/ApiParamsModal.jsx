import { useForm } from 'react-hook-form'
import CloseIcon from '../../icons/Close'

export default function ApiParamsModal({
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
        <div className='w-[400px] md:w-[800px] max-h-[340px]'>
          <div className='mx-auto my-4 w-full pb-4'>
            <h3 className='text-gray-800 text-xl text-center font-bold'>
              Añadir Parámetro
            </h3>
            <form onSubmit={onSubmit} className='my-2 '>
              <div className='flex flex-col md:flex-row justify-between items-center gap-3'>
                <div className='flex flex-col justify-between items-center w-full'>
                  <div className='w-full mb-2'>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Nombre
                      {errors.name && (
                        <span className='text-red-500 text-sm ml-2'>*</span>
                      )}
                    </label>
                    <div className='mt-2'>
                      <input
                        id='name'
                        name='name'
                        type='text'
                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                        {...register('name', {
                          required: {
                            value: true,
                            message: 'El campo nombre es requerido'
                          }
                        })}
                      />
                    </div>
                  </div>
                  <div className='w-full mb-2'>
                    <label
                      htmlFor='dataType'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Tipo de dato
                      {errors.dataType && (
                        <span className='text-red-500 text-sm ml-2'>*</span>
                      )}
                    </label>
                    <div className='mt-2'>
                      <select
                        id='dataType'
                        name='dataType'
                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                        {...register('dataType', {
                          required: {
                            value: true,
                            message: 'El parámetro debe ser de un tipo'
                          }
                        })}
                      >
                        <option value=''>--Seleccione un tipo--</option>
                        <option value='String'>String</option>
                        <option value='Number'>Number</option>
                        <option value='Double'>Double</option>
                        <option value='Boolean'>Boolean</option>
                        <option value='Boolean'>Object</option>
                        <option value='Boolean'>Array</option>
                      </select>
                    </div>
                  </div>
                  <div className='w-full mb-2'>
                    <label
                      htmlFor='inputOrOutput'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Entrada/Salida
                      {errors.inputOrOutput && (
                        <span className='text-red-500 text-sm ml-2'>*</span>
                      )}
                    </label>
                    <div className='mt-2'>
                      <select
                        id='inputOrOutput'
                        name='inputOrOutput'
                        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                        {...register('inputOrOutput', {
                          required: {
                            value: true,
                            message: 'El parámetro debe ser de un tipo'
                          }
                        })}
                      >
                        <option value=''>--Seleccione un tipo--</option>
                        <option value='entrada'>Entrada</option>
                        <option value='salida'>Salida</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-center items-center w-full'>
                  <div className='w-full mb-2'>
                    <label
                      htmlFor='description'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Descripción
                      {errors.description && (
                        <span className='text-red-500 text-sm ml-2'>*</span>
                      )}
                    </label>
                    <div className='mt-2'>
                      <textarea
                        id='description'
                        name='description'
                        rows={3}
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        defaultValue={''}
                        {...register('description', {
                          required: {
                            value: true,
                            message: 'El campo descripción es requerido'
                          }
                        })}
                      />
                    </div>
                  </div>
                  <div className='w-full mb-2'>
                    <label
                      htmlFor='example'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Ejemplo
                      {errors.example && (
                        <span className='text-red-500 text-sm ml-2'>*</span>
                      )}
                    </label>
                    <div className='mt-2'>
                      <textarea
                        id='example'
                        name='example'
                        rows={3}
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        defaultValue={''}
                        {...register('example', {
                          required: {
                            value: true,
                            message: 'El campo ejemplo es requerido'
                          }
                        })}
                      />
                    </div>
                  </div>
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
