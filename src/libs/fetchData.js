import axios from 'axios'
import handleErrors from './handleErrors'
import { handleEntities } from './handleEntities'

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

export async function FetchDataAPI({
  url,
  method,
  setLoading,
  setData,
  setHeaders,
  setParams,
  setEntities
}) {
  try {
    setLoading(true)
    const response = await axios({
      method,
      url
    })
    if (response.status === 200) {
      setData(response.data.data)
      setHeaders(response.data.data.headers)
      setParams(response.data.data.params)
      setEntities(handleEntities(response.data.data.entities))
      return
    }
  } catch (error) {
    handleErrors({ error })
  } finally {
    setLoading(false)
  }
}
