import React from 'react';
import Image from 'next/image';
import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.root}>
      <Image width={30} height={30} src="/logo.svg" alt="logo" className={classes.logo} />
    </header>
  );
}

export default Header;
