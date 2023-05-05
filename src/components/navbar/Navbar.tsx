import './navbar.css'

import { Link } from 'react-router-dom'
import {auth} from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth'

export const Navbar = () => {

  const [user] = useAuthState(auth)
  
  const signUserOut = async () => {
    await signOut(auth)
  }

  return (
    <nav className='navbar'>
      <div className="links">
        <Link to="/">Home</Link>
        {!user ? <Link to="/login">Login</Link> : <Link to="/createpost">Create Post</Link>}
      </div>

      <div className='user'>
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} referrerPolicy="no-referrer" width="50" height='50' />
            <button className='logoutbtn' onClick={signUserOut}> Log out </button>
          </>
        )}
        
      </div>
    </nav>
  )
}