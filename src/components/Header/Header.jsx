import React from 'react';

import LogoHeader from './LogoHeader';

const Header = () => {
  return ( 
    <>
    <nav className='cyan darken-2'>
      <LogoHeader />
    <div className="nav-wrapper">
      <h2 className='header-text'>Toys Shop</h2>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      </ul>
    </div>
  </nav>
    </>
   );
}
 
export default Header;