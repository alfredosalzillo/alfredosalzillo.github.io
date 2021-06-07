import React from 'react'
import Logo from '../Logo/Logo.tsx'
import classes from './Header.module.css'

const Header = () => (
  <header className={classes.root}>
    <Logo height="64px" />
    <h1 className={classes.title}>
      Alfredo Salzillo
    </h1>
  </header>
)

export default Header
