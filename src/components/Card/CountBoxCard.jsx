import UsersGroupIcon from '../../icons/UsersGroup'
import APiIcon from '../../icons/API'

export default function CountBoxCard({ count, text }) {
  const showIcon = (text) => {
    if (text === 'Total de servicios') {
      return <APiIcon styles={'size-6 text-blue-500'} />
    }
    if (text === 'Total de usuarios') {
      return <UsersGroupIcon styles={'size-6 text-blue-500'} />
    }
  }

  return (
    <div className='w-1/5 bg-white shadow rounded-md flex gap-4 py-3 flex-row justify-center items-center mr-3 mt-2'>
      <span>{showIcon(text)}</span>
      <p className='text-sm text-blue-500'>{text}</p>
      <span className='text-lg text-blue-500 font-semibold border-l border-blue-500 px-2'>
        {count}
      </span>
    </div>
  )
}
