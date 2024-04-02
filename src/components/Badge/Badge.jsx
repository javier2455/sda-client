export default function Badge({ text }) {
  const styles = (text) => {
    if (text === 'administrador') {
      return 'bg-blue-900 text-blue-300'
    }
    if (text === 'usuario') {
      return 'bg-gray-700 text-gray-300'
    }
  }
  return (
    <span
      className={`text-[14px] me-2 px-2.5 py-1 rounded-full ${styles(text)}`}
    >
      {text}
    </span>
  )
}
