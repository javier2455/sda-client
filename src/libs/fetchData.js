import axios from 'axios'
import handleErrors from './handleErrors'

export async function FetchData({ url, method, setLoading, setData }) {
  try {
    setLoading(true)
    const response = await axios({
      method,
      url
    })
    if (response.status === 200) {
      setData(response.data.data)
      return
    }
  } catch (error) {
    handleErrors({ error })
  } finally {
    setLoading(false)
  }
}
