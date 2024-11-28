import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-yellow-400 text-blue-800 p-2">
      <div className="container mx-auto flex justify-between items-center">
      <div className='bg-blue-800'>
        <Link to="/">
            <img 
                src="/ustp.png" 
                alt="Department Logo" 
                className="h-14 w-14" 
            />
        </Link>
        
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/aboutus" className="hover:underline font-bold">About</Link></li>
            <li><Link to="/alumni" className="hover:underline font-bold">Alumni</Link></li>
            <li><Link to="/activities" className="hover:underline font-bold">Activities</Link></li>
            <li><Link to="/announcements" className="hover:underline font-bold">Announcements</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
