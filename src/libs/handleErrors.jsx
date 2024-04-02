import { toast } from 'sonner'
import Toast from '../components/Toast/Toast'

export default function handleErrors({ error }) {
  console.log(error)
  if (error.code === 'ERR_BAD_REQUEST' && error.response) {
    if (error.response.data.message[0] === 'Usuario no encontrado') {
      return toast.custom((t) => (
        <Toast
          title={'Credenciales incorrectas'}
          description={
            'Usuario o contraseña incorrecto(s).'
          }
          t={t}
          type={'error'}
        />
      ))
    }
    if (error.response.data.message === 'Sin token, autorización denegada') {
      return toast.custom((t) => (
        <Toast
          title={'Credenciales incorrectas'}
          description={
            'Sin token, autorización denegada.'
          }
          t={t}
          type={'error'}
        />
      ))
    }
  }
  if (error.code === 'ERR_NETWORK') {
    return toast.custom((t) => (
      <Toast
        title={'Error de conexión'}
        description={
          'Ahora no podemos conectarnos con el servidor, espere unos minutos o intentelo más tarde.'
        }
        t={t}
        type={'error'}
      />
    ))
  } else {
    toast.custom((t) => (
      <Toast
        title={error.code}
        description={error.message}
        t={t}
        type={'error'}
      />
    ))
  }
  //   return <div>handleErrors</div>
}
