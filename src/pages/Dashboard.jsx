// import { useContext } from 'react'
// import { AuthContext } from '../context/AuthContext'
import DashBoardLayout from '../layout/DashBoardLayout'

export default function Dashboard() {
  // const { profile } = useContext(AuthContext)
  // const user = profile()
  return (
    <DashBoardLayout>
      <h1>Dashboard</h1>
    </DashBoardLayout>
    // <>
    //   <h1>{user.username}</h1>
    //   <p>{user.email}</p>
    // </>
    // <div className='container'>
    //   <div>
    //     <h1>Welcome! {user?.username}</h1>
    //     <button onClick={() => logOut()} className='btn-submit'>
    //       logout
    //     </button>
    //   </div>
    // </div>
  )
}
