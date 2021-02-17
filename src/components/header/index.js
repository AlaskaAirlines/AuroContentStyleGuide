import React from 'react';
import './style.scss';

const { REACT_APP_TITLE, REACT_APP_SUB_TITLE } = process.env;

function Header() {
  return (
    <header className="siteHeader">
      <auro-lockup>
        <span slot="title">{ REACT_APP_TITLE }</span>
        <span slot="subtitle">{ REACT_APP_SUB_TITLE }</span>
      </auro-lockup>

    </header>
  );
}

export default Header;
