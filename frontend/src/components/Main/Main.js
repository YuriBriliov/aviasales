import React from "react";
import Header from "../Header/Header";
import Forms from "../Froms/From";
import styles from './Main.module.css'

const Main = () =>{
  return(
    <div className={styles.back}>
      <Header />
      <Forms />
    </div>
  )
}

export default Main
