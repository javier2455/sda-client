export default function TableParams({ params }) {
  function handleInput(value) {
    if (value === 1) return 'Entrada'
    if (value === 2) return 'Salida'
  }
  return (
    <table className='w-full text-sm text-left text-gray-500'>
      <thead className='text-[15px] text-black font-bold uppercase bg-blue-100'>
        <tr>
          <th scope='col' className='px-6 py-3 text-center'>
            Nombre
          </th>
          <th scope='col' className='px-6 py-3 text-center'>
            Tipo de dato
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
        </tr>
      </thead>
      <tbody>
        {params?.map((api) => (
          <tr
            key={api.id}
            className={`border-b text-[14px] text-black`}
          >
            <td className='px-6 py-4 text-center'>{api.name}</td>
            <td className='px-6 py-4 text-center'>{api.dataType}</td>
            <td className='px-6 py-4 text-center'>{api.description}</td>
            <td className='px-6 py-4 text-center'>{api.example}</td>
            <td className='px-6 py-4 text-center'>
              {handleInput(api.inputOrOutput)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
