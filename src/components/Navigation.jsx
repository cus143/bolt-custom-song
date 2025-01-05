import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="main-nav">
      <div className="container">
        <Link to="/" className="logo">
          SongToRemember
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
