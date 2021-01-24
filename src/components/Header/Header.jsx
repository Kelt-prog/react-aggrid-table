import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <header className='navbar'>
      <h3 className='navbar-heading' data-testid='navbar-main'>
        React table made with Ag-Grid
      </h3>
    </header>
  );
}