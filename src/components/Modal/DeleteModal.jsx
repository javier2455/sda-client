import CloseIcon from '../../icons/Close'

export default function DeleteModal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? 'visible bg-black/20' : 'invisible'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation(e)}
        className={`bg-white rounded-xl shadow p-6 transition-all duration-300 ${
          open ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
      >
        <button
          onClick={onClose}
          className='absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700 transition'
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  )
}
