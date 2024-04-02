import UserCircle from '../../icons/UserCircle'

export default function UserCard({ user }) {
  return (
    <div className='flex p-3'>
      <div className='flex justify-center items-center'>
        <UserCircle />
      </div>
      <div className='flex justify-between items-center ml-3'>
        <div className='leading-4'>
          <h4 className='font-semibold'>{user.username}</h4>
          <span className='text-xs text-gray-600'>{user.email}</span>
        </div>
      </div>
    </div>
  )
}
