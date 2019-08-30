import React from 'react';

import '../styles/NavBar.css';

const NavBar = props => (
  <div className="NavBar">
    <img src="https://cdn1.iconfinder.com/data/icons/navigation-7/32/house-01-512.png" width="90" height="90" />
    <span>Surreal Estate</span>
    <ul className="nav">
      <li>View Properties</li>
      <li>Add a Property</li>
    </ul>
  </div>
);

export default NavBar;
