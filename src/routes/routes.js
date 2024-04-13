const BASE_URL = 'http://localhost:4001'
// const BASE_URL = 'https://sda.example.onat.gob.cu'

// URLs Backend request
export const SEND_AUTH = `${BASE_URL}/auth/login`

export const GET_ALL_USERS = `${BASE_URL}/user/get_all_users`
export const GET_USER_BY_ID = `${BASE_URL}/user/get_user`
export const CREATE_USER = `${BASE_URL}/user/create_user`
export const UPDATE_USER = `${BASE_URL}/user/update_user`
export const DELETE_USER = `${BASE_URL}/user/delete_user`

export const GET_ALL_APIS = `${BASE_URL}/api/get_all_apis`
export const GET_API_BY_ID = `${BASE_URL}/api/get_api`
export const CREATE_API = `${BASE_URL}/api/create_api`
export const UPDATE_API = `${BASE_URL}/api/update_api`
export const DELETE_API = `${BASE_URL}/api/delete_api`

// URLs Client navigation
export const DASHBOARD_INDEX = '/dashboard'
export const DASHBOARD_USER = '/dashboard/users'
export const DASHBOARD_USER_FORM = '/dashboard/users/form'
export const DASHBOARD_API = '/dashboard/apis'
export const DASHBOARD_API_FORM = '/dashboard/apis/form'
