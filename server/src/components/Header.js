import { Link } from 'react-router-dom';
import React from 'react';


const Header = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <br />
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default Header;
