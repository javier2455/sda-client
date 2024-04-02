const BASE_URL = 'http://localhost:4001'
// const BASE_URL = 'https://sda.example.onat.gob.cu'

// URLs Backend request
export const GET_USER_BY_ID = `${BASE_URL}/user/get_user`
export const CREATE_NEW_USER = `${BASE_URL}/user/create_user`
export const UPDATE_NEW_USER = `${BASE_URL}/user/update_user`

// URLs Client navigation
export const DASHBOARD_INDEX = '/dashboard'
export const DASHBOARD_USER = '/dashboard/users'
export const DASHBOARD_USER_FORM = '/dashboard/users/form'
export const DASHBOARD_API = '/dashboard/apis'
export const DASHBOARD_API_FORM = '/dashboard/apis/form'
