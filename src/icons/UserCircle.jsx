export default function UserCircle() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={28}
      height={28}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='font-normal'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
      <path d='M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
      <path d='M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855' />
    </svg>
  )
}