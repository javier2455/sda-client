import { NavLink } from 'react-router-dom'

export default function SidebarItem({ icon, text, alert, url, end }) {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        `relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
          isActive
            ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
            : 'hover:bg-indigo-50'
        }`
      }
      end={end}
    >
      {icon}
      <span className='w-52 ml-3 font-bold'>{text}</span>
      {alert && (
        <div className='absolute right-2 size-2 rounded bg-indigo-400' />
      )}
    </NavLink>
  )
}
