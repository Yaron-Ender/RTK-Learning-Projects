import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchNotifications } from '../features/notifications/notificationsSlice'

export const Navbar = () => {
const dispatch = useDispatch()

const fetchNewNotifications = ()=>{
  dispatch(fetchNotifications())
}

  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks"></div>
          <Link to='/'>Posts</Link>
          <Link to='/users'>Users</Link>
          <Link to='/notifications'>Notifications</Link>
          <button onClick={fetchNewNotifications} >refresh Notifications</button>
        </div>
      </section>
    </nav>
  )
}
