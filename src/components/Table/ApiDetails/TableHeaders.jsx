export default function TableHeaders({ headers }) {
  return (
    <table className='w-full text-sm text-left text-gray-500'>
      <thead className='text-[15px] text-black font-bold uppercase bg-blue-100'>
        <tr>
          <th scope='col' className='px-6 py-3 text-center'>
            Clave
          </th>
          <th scope='col' className='px-6 py-3 text-center'>
            Valor
          </th>
        </tr>
      </thead>
      <tbody>
        {headers.map((api) => (
          <tr key={api.id} className='border-b text-[14px] text-black'>
            <td className='px-6 py-4 text-center'>{api.key}</td>
            <td className='px-6 py-4 text-center'>{api.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
