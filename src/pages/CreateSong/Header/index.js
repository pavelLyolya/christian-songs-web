import React from 'react';
import cross from '../../../assets/cross.png';
import './style.css';

function Header() {
  return (
    <header className="header">
      <div className="header-wrap wrap">
        <figure className="logo">
          <img className="logo-img" src={cross} alt="LOGO" />
          <figcaption className="logo-text">
            <span>СБОРНИК</span>
            <span>МОЛОДЁЖНЫХ</span>
            <span>ПЕСЕН</span>
          </figcaption>
        </figure>
      </div>
    </header>
  );
}

export default Header;
