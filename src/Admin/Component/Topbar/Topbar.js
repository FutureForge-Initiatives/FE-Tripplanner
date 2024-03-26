import React from 'react';
import { RiNotificationLine } from 'react-icons/ri';
import { MdAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Topbar.css';

function Topbar() {
  return (
    <div className='wrap-topbar'>
      <div className='search-topbar'>
        <input type="text" placeholder='Search...' />
      </div>
      <div className='topbar-user-profile'>
        <Link to="/profile" className="topbar-user-link">
          <MdAccountCircle className="topbar-user-icon" />
          <span className="topbar-user-name">John Doe</span>
        </Link>
      </div>
      <div className='activity-topbar'>
        <RiNotificationLine className="activity-icon" />
        <span className="activity-count">5</span>
      </div>
    </div>
  );
}

export default Topbar;
