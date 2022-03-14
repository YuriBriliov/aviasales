import React from "react";
import logo from './logo.png'
import styles from './Header.module.css'

const Header = () =>{
  return(
    <div className={styles.header_container} >
      <img src={logo} alt="hello"/>
    </div>
  )
}

export default Header
