import CloseIcon from '../../icons/Close'
import Badge from '../Badge/Badge'
import TableHeaders from '../Table/ApiDetails/TableHeaders'
import TableParams from '../Table/ApiDetails/TableParams'
import DashedCheckIcon from '../../icons/DashedCheck'

export default function ApiDetailsModal({ open, onClose, api }) {
  // console.log('<details Api>', api)
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? 'visible bg-black/20' : 'invisible'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation(e)}
        className={`bg-white rounded-xl shadow p-6 transition-all duration-300 relative ${
          open ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
      >
        <button
          onClick={onClose}
          className='absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700 transition'
        >
          <CloseIcon styles={'size-10'} />
        </button>
        <div className='w-[90vw] h-[90vh] overflow-y-auto'>
          <div
            className='relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'
            style={{ cursor: 'auto' }}
          >
            <div className='max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm shadow-white lg:max-w-none'>
              <div className='flex-1 px-6 py-8 lg:p-12'>
                <div className='flex justify-between items-center'>
                  <h3 className='text-2xl font-extrabold text-blue-800 sm:text-3xl w-[90%]'>
                    {api?.name}
                  </h3>
                </div>
                <p className='mt-6 text-base text-blue-800'>
                  {api?.description}
                </p>
                <div className='mt-8'>
                  <div className='flex items-center'>
                    <h4 className='flex-shrink-0 pr-4 text-md font-semibold tracking-wider text-blue-800 uppercase '>
                      Detalles del Servicio
                    </h4>
                    <div className='flex-1 border-t-2 border-blue-300' />
                  </div>
                  <ul className='mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5'>
                    <li className='flex items-start lg:col-span-1'>
                      <div className='flex-shrink-0'>
                        <DashedCheckIcon styles={'text-blue-400 text-xl'} />
                      </div>
                      <p className='ml-1 text-md font-semibold text-black'>
                        Método:
                      </p>
                      <p className='ml-3 text-md text-black'>{api?.method}</p>
                    </li>
                    <li className='flex items-start lg:col-span-1'>
                      <div className='flex-shrink-0'>
                        <DashedCheckIcon styles={'text-blue-400 text-xl'} />
                      </div>
                      <p className='ml-1 text-md font-semibold text-black'>
                        URL:
                      </p>
                      <p className='ml-3 text-md text-black'>{api?.url}</p>
                    </li>
                    <li className='flex items-center justify-start lg:col-span-1'>
                      <div className='flex-shrink-0'>
                        <DashedCheckIcon styles={'text-blue-400 text-xl'} />
                      </div>
                      <p className='ml-1 text-md font-semibold text-black'>
                        Fecha de creación:
                      </p>
                      <p className='ml-3 text-md text-black'>
                        {new Date(api?.createdAt).toLocaleDateString()}
                      </p>
                      {/* <div
                    className='tooltip tooltip-right'
                    data-tip={`Hora de creación: ${new Date(
                      api?.createdAt
                    ).toLocaleTimeString()}`}
                  >
                    <HiOutlineExclamationCircle className='text-xl text-white ml-3' />
                  </div> */}
                    </li>
                    <li className='flex items-start lg:col-span-1'>
                      <div className='flex-shrink-0'>
                        <DashedCheckIcon styles={'text-blue-400 text-xl'} />
                      </div>
                      <p className='ml-1 text-md font-semibold text-black'>
                        Fecha de actualización:
                      </p>
                      <p className='ml-3 text-md text-black'>
                        {new Date(api?.updatedAt).toLocaleDateString()}
                      </p>
                      {/* <div
                    className='tooltip tooltip-right'
                    data-tip={`Hora de actualización: ${new Date(
                      service.updatedAt
                    ).toLocaleTimeString()}`}
                  >
                    <HiOutlineExclamationCircle className='text-xl text-white ml-3' />
                  </div> */}
                    </li>
                    <li className='flex items-start lg:col-span-1'>
                      <div className='flex-shrink-0'>
                        <DashedCheckIcon styles={'text-blue-400 text-xl'} />
                      </div>
                      <p className='ml-1 text-md font-semibold text-black'>
                        Visibilidad:
                      </p>
                      <p className='ml-3 text-md text-black'>
                        {api?.visibility === 'private' ? 'Interna' : 'Pública'}
                      </p>
                    </li>
                    {api?.body && (
                      <li className='flex items-start lg:col-span-1'>
                        <div className='flex-shrink-0'>
                          <DashedCheckIcon styles={'text-blue-400 text-xl'} />
                        </div>
                        <p className='ml-1 text-md font-semibold text-black'>
                          Body:
                        </p>
                        <p className='ml-3 text-md text-black'>{api?.body}</p>
                      </li>
                    )}
                  </ul>
                </div>
                {api?.entities.length > 0 && (
                  <article className='mt-8'>
                    <h3 className='font-semibold my-2'>Entidades</h3>
                    {api?.entities.map((entity) => (
                      <Badge key={entity.id} text={entity.name} />
                    ))}
                  </article>
                )}
                {api?.headers.length > 0 && (
                  <article className='mt-8'>
                    <h3 className='font-semibold my-2'>Cabeceras</h3>
                    <TableHeaders headers={api?.headers} />
                  </article>
                )}
                {api?.params.length > 0 && (
                  <article className='mt-8'>
                    <h3 className='font-semibold my-2'>Parámetros</h3>
                    <TableParams params={api?.params} />
                  </article>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
