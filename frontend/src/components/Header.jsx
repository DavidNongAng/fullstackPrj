import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Header className='header'>
        <div className='logo'>
            <Link to='/'>GoalSetter</Link>
        </div>
        <ul>
            <li>
                <Link to='/login'>
                    <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaUser /> reguster
                </Link>
            </li>
        </ul>
    </Header>
  )
}

export default Header