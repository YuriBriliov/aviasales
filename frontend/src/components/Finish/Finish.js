import React from "react";
import Header from "../Header/Header";
import styles from './Finish.module.css'
import man from './man.png'


const Finish = () =>{
  return(
    <div className={styles.back}>
        <Header />
      <div className={styles.text_block}>
        <h4 className={styles.text1}>
          выборы
        </h4>
        <h3 className={styles.text2}>
          путешествие
        </h3>
        <h2 className={styles.text3}>
          близко
        </h2>
      </div>
    </div>
  )
}

export default Finish
