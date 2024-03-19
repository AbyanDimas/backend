import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/page1">
              Page 1
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/page2">
              Page 2
            </Link>
          </li>
          {/* Tambahkan tautan menu lainnya di sini */}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
