import { toast } from 'sonner'
import CloseIcon from '../../icons/Close'
import ExclamationIcon from '../../icons/Exclamation'
import AlertWarningIcon from '../../icons/AlertWarning'
import InfoIcon from '../../icons/Info'
import SuccessIcon from '../../icons/Checks'

export default function Toast({ title, description, type, t }) {
  const styles = (type) => {
    if (type === 'error') {
      return 'bg-red-200 text-red-600'
    }
    if (type === 'warning') {
      return 'bg-yellow-200 text-yellow-600'
    }
    if (type === 'info') {
      return 'bg-blue-200 text-blue-600'
    }
    if (type === 'success') {
      return 'bg-green-200 text-green-600'
    }
  }

  return (
    <div
      id='toast-default'
      className={`relative flex items-center justify-between gap-x-4 w-full max-w-xs md:max-w-full p-4 ${styles(
        type
      )} rounded-lg shadow`}
      role='alert'
    >
      <div className='inline-flex items-center justify-center flex-shrink-0 size-8 rounded-lg '>
        {type === 'error' && <ExclamationIcon />}
        {type === 'warning' && <AlertWarningIcon />}
        {type === 'info' && <InfoIcon />}
        {type === 'success' && <SuccessIcon />}
        <span className='sr-only'>Type icon</span>
      </div>
      <div className='ms-3 text-sm font-normal'>
        <h3 className='text-[16px] font-semibold'>{title}</h3>
        <p className='text-[14px]'>{description}</p>
      </div>
      <div className='w-5 h-full'/>
      <button
        className='absolute top-2 right-2'
        onClick={() => toast.dismiss(t)}
      >
        <CloseIcon />
      </button>
    </div>
  )
}
