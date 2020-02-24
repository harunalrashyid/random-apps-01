import React from 'react';
import logo from './logo.svg';
import styles from './Header.module.css';

const Header = props => {
  return(
    <header className={styles.App__header}>
      <img src={logo} className={styles.App__logo} alt="logo" />
      <a
        className={styles.App__link}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default Header;