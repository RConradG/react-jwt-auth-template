import { useContext } from 'react';
import { Link } from 'react-router';
import { UserContext } from '../../contexts/UserContext';

const NavBar = () => {
  const { user, setUser }= useContext(UserContext);
  
  const handleSignOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  }
  return (
    <nav>
      <ul>
        {user ? (
          <>
            <li>Welcome, {user.username}</li>
            <li>
              <Link to="/">Sign Out</Link>
            </li>
          </>
        ) : (
          <li>
            <Link onClick={handleSignOut} to="/sign-up">
              Sign Up
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;