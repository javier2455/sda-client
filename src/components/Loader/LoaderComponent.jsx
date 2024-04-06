import LoaderIcon from '../../icons/Loader'

export default function LoaderComponent() {
  return (
    // <span className='absolute top-1/2 left-1/2'>
    <span className='flex justify-center items-center h-full'>
        <LoaderIcon styles={'size-20 text-blue-500 animate-spin'}/>
    </span>
  )
}
