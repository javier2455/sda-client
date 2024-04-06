import { useState } from 'react'
import DashBoardLayout from '../../layout/DashBoardLayout'
import SelectEntity from '../../components/Select/SelectEntity'
import PlusIcon from '../../icons/Plus'
import TrashIcon from '../../icons/Trash'
import { Link } from 'react-router-dom'
import { DASHBOARD_API } from '../../routes/routes'
import ApiHeaderModal from '../../components/Modal/ApiHeaderModal'
import ApiParamsModal from '../../components/Modal/ApiParamsModal'

export default function ApiForm() {
  const [loading, setLoading] = useState(false)
  const [titleForm, setTitleForm] = useState('Añadir Nueva API')
  const [d_headers, setD_headers] = useState([])
  const [d_params, setD_params] = useState([])
  const [d_entities, setD_entities] = useState([])
  const [openModalHeaders, setOpenModalHeaders] = useState(false)
  const [openModalParams, setOpenModalParams] = useState(false)

  const handleDeleteHeader = (key) => {
    setD_headers(d_headers.filter((header) => header.key !== key))
  }

  const handleDeleteParams = (name) => {
    setD_params(d_params.filter((param) => param.name !== name))
  }

  return (
    <DashBoardLayout>
      <main className='my-10 overflow-y-auto max-h-[500px]'>
        <div className='bg-white w-full mx-auto shadow-md rounded-2xl '>
          <h1 className='text-center text-2xl font-bold py-6'>{titleForm}</h1>
          <form className='px-6 py-6 '>
            {/* Inputs */}
            <div className='flex flex-col md:flex-row justify-between items-center gap-x-4 mb-6'>
              <div className='w-full md:w-1/2'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Nombre
                </label>
                <div className='mt-2'>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    autoComplete='name'
                    required
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      loading && 'opacity-60'
                    }`}
                    // disabled={loading}
                  />
                </div>
              </div>
              <div className='w-full md:w-1/2'>
                <label
                  htmlFor='url'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  URL
                </label>
                <div className='mt-2'>
                  <input
                    id='url'
                    name='url'
                    type='text'
                    autoComplete='url'
                    required
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      loading && 'opacity-60'
                    }`}
                    // disabled={loading}
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-x-4 mb-6'>
              <div className='w-full md:w-1/2'>
                <label
                  htmlFor='method'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Método (Method)
                </label>
                <div className='mt-2'>
                  <input
                    id='method'
                    name='method'
                    type='text'
                    autoComplete='method'
                    required
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      loading && 'opacity-60'
                    }`}
                    // disabled={loading}
                  />
                </div>
              </div>
              <div className='w-full md:w-1/2'>
                <label
                  htmlFor='visibility'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Visibilidad
                </label>
                <div className='mt-2'>
                  <input
                    id='visibility'
                    name='visibility'
                    type='text'
                    autoComplete='visibility'
                    required
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      loading && 'opacity-60'
                    }`}
                    // disabled={loading}
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-x-4 mb-6'>
              <div className='w-full md:w-1/2'>
                <label
                  htmlFor='body'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Cuerpo (Body)
                </label>
                <div className='mt-2'>
                  <input
                    id='body'
                    name='body'
                    type='text'
                    autoComplete='body'
                    required
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      loading && 'opacity-60'
                    }`}
                    // disabled={loading}
                  />
                </div>
              </div>
              <div className='w-full md:w-1/2'>
                <label
                  htmlFor='entity'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Entidades
                </label>
                <div className='mt-2'>
                  <SelectEntity selected={d_entities} setSelected={setD_entities}/>
                  {/* <select
                    id='inputOrOutput'
                    name='inputOrOutput'
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  >
                    <option value=''>--Seleccione entidad(es)--</option>
                    <option value='ONAT'>ONAT</option>
                    <option value='ETECSA'>ETECSA</option>
                    <option value='MTSS'>MTSS</option>
                    <option value='MININT'>MININT</option>
                  </select> */}
                </div>
              </div>
            </div>
            <div className='mb-8 w-full'>
              <div className='col-span-full'>
                <label
                  htmlFor='description'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Descripción
                </label>
                <div className='mt-2'>
                  <textarea
                    id='description'
                    name='description'
                    rows={3}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            {/* Inputs */}
            {/* Tablas */}
            <div className='mb-8'>
              <div
                id='table-header'
                className='flex justify-between items-center mb-3'
              >
                <label
                  htmlFor='headers'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Cabeceras {'(Headers)'}
                </label>
                <button
                  type='button'
                  onClick={() => setOpenModalHeaders(true)}
                  className='flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 font-bold rounded-lg text-md p-2 transition shadow-sm hover:scale-105'
                >
                  <PlusIcon />
                </button>
              </div>
              <table
                name='headers'
                className='w-full text-sm text-left text-gray-500 table-fixed'
              >
                <thead className='text-[15px] text-black font-bold uppercase bg-blue-100'>
                  <tr>
                    <th scope='col' className='px-6 py-3 text-center'>
                      Clave {'(KEY)'}
                    </th>
                    <th scope='col' className='px-6 py-3 text-center'>
                      Valor {'(Value)'}
                    </th>
                    <th scope='col' className='px-6 py-3 text-center'>
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {d_headers.length === 0 && (
                    <td
                      colSpan={3}
                      className='text-center text-lg px-6 py-4 text-black font-bold'
                    >
                      Sin cabeceras definidas
                    </td>
                  )}
                  {d_headers.map((u) => (
                    <tr key={u.key} className='border-b text-[14px] text-black'>
                      <td className='px-6 py-4 text-center font-semibold'>
                        {u.key}
                      </td>
                      <td className='px-6 py-4 text-center font-semibold'>
                        {u.value}
                      </td>
                      <td
                        onClick={() => handleDeleteHeader(u.key)}
                        className='px-6 py-4 text-center flex justify-center'
                      >
                        <span className='cursor-pointer px-2 py-1 hover:bg-red-500 hover:text-white rounded-lg bg-white text-red-500 hover:border border-red-500 transition-all border hover:border-white'>
                          <TrashIcon />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='mb-8'>
              <div
                id='table-header'
                className='flex justify-between items-center mb-3'
              >
                <label
                  htmlFor='params'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Parámetros
                </label>
                <button
                  type='button'
                  onClick={() => setOpenModalParams(true)}
                  className='flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 font-bold rounded-lg text-md p-2 transition shadow-sm hover:scale-105'
                >
                  <PlusIcon />
                </button>
              </div>
              <table
                name='params'
                className='w-full text-sm text-left text-gray-500 table-fixed'
              >
                <thead className='text-[15px] text-black font-bold uppercase bg-blue-100'>
                  <tr>
                    <th scope='col' className='px-6 py-3 text-center'>
                      Nombre
                    </th>
                    <th scope='col' className='px-6 py-3 text-center'>
                      Tipo de Dato
                    </th>
                    <th scope='col' className='px-6 py-3 text-center'>
                      Descripción
                    </th>
                    <th scope='col' className='px-6 py-3 text-center'>
                      Ejemplo
                    </th>
                    <th scope='col' className='px-6 py-3 text-center'>
                      Entrada/Salida
                    </th>
                    <th scope='col' className='px-6 py-3 text-center'>
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {d_params.length === 0 && (
                    <td
                      colSpan={6}
                      className='text-center text-lg px-6 py-4 text-black font-bold'
                    >
                      Sin parámetros definidas
                    </td>
                  )}
                  {d_params.map((p) => (
                    <tr
                      key={p.name}
                      className='border-b text-[14px] text-black'
                    >
                      <th
                        scope='row'
                        className='px-6 py-4 text-center font-medium whitespace-nowrap'
                      >
                        {p.name}
                      </th>
                      <td className='px-6 py-4 text-center'>{p.dataType}</td>
                      <td className='px-6 py-4 text-center truncate'>
                        {p.description}
                      </td>
                      <td className='px-6 py-4 text-center truncate'>
                        {p.example}
                      </td>
                      <td className='px-6 py-4 text-center'>
                        {p.inputOrOutput}
                      </td>
                      <td
                        onClick={() => handleDeleteParams(p.name)}
                        className='px-6 py-4 text-center flex justify-center'
                      >
                        <span className='cursor-pointer px-2 py-1 hover:bg-red-500 hover:text-white rounded-lg bg-white text-red-500 hover:border border-red-500 transition-all border hover:border-white'>
                          <TrashIcon />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Tablas */}
            {/* Botones */}
            <div className='flex justify-end items-center gap-x-4 my-6'>
              <button
                type='submit'
                className={`bg-blue-800 px-4 py-2 uppercase text-white hover:bg-blue-600 transition rounded-md shadow ${
                  loading && 'opacity-60'
                }`}
                disabled={loading}
              >
                Aceptar
              </button>
              <Link
                to={DASHBOARD_API}
                className={`bg-red-800 px-4 py-2 uppercase text-white hover:bg-red-600 transition rounded-md shadow ${
                  loading && 'opacity-60'
                }`}
                disabled={loading}
              >
                <button type='reset'>Cancelar</button>
              </Link>
            </div>
            {/* Botones */}
          </form>
        </div>
      </main>
      <ApiHeaderModal
        open={openModalHeaders}
        onClose={() => setOpenModalHeaders(false)}
        array={d_headers}
        handleFunction={setD_headers}
      />
      <ApiParamsModal
        open={openModalParams}
        onClose={() => setOpenModalParams(false)}
        array={d_params}
        handleFunction={setD_params}
      />
    </DashBoardLayout>
  )
}
