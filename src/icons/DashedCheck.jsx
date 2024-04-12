export default function DashedCheck({ styles }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={styles}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M8.56 3.69a9 9 0 0 0 -2.92 1.95' />
      <path d='M3.69 8.56a9 9 0 0 0 -.69 3.44' />
      <path d='M3.69 15.44a9 9 0 0 0 1.95 2.92' />
      <path d='M8.56 20.31a9 9 0 0 0 3.44 .69' />
      <path d='M15.44 20.31a9 9 0 0 0 2.92 -1.95' />
      <path d='M20.31 15.44a9 9 0 0 0 .69 -3.44' />
      <path d='M20.31 8.56a9 9 0 0 0 -1.95 -2.92' />
      <path d='M15.44 3.69a9 9 0 0 0 -3.44 -.69' />
      <path d='M9 12l2 2l4 -4' />
    </svg>
  )
}