import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import styles from './Forms.module.css'
import { updateUser } from '../../redux/actions/userAction'


const Forms = () =>{

  
  const [status, setStatus] = useState(false)
  const [statusBtn, setStatusBtn] = useState(false)
  const [statusEmail, setStatusEmail] = useState(false)
  const user = useSelector((state)=>state.user)
  const dispatch = useDispatch()


  function setStatusSocial(arg){
    if(arg.target.tagName === "SPAN" || user.shared === false){
      setStatus(true)
      user.shared = true
      dispatch(updateUser(user))
    }
  }

  function validateMain(event){
    console.log(event.target.value)
    if ((event.target.value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      setStatusEmail(event.target.value)
    }else{
      setStatusEmail(false)
    }
  }

  function setEmailStatus(){
    setStatusBtn(true)
    user.email = statusEmail
    dispatch(updateUser(user))
    // dispatch(updateUser(user))
  }

  useEffect(()=>{
    if(user.shared){
      setStatus(true)
    }
    if(user.email){
      setStatusBtn(true)
    }
  },[user])

  return(
    <div className={styles.container_block}>
      <div className={styles.container_form}>
        <h2 className={styles.title}>
          Чтобы выиграть путешествие
        </h2>
        <div className={styles.form_title}>
          <div className={styles.nums}>
            {status ? <p className={styles.checker}>&#10003;</p> : '1.'}
          </div>
          <div className={status ? styles.title_share_disable : styles.title_share}>
            Поделитесь с друзьями:
          </div>
        </div>
        <div className={status ? styles.social_block_disabled : styles.social_block} onClick={setStatusSocial}>
          <div className="ya-share2" data-curtain data-size="l" data-shape="round" data-services="vkontakte,facebook,odnoklassniki,twitter"></div>
        </div>
        <div className={styles.form_title}>
          <div className={styles.nums}>
            {statusBtn ? <p className={styles.checker}>&#10003;</p> : '2.'}
          </div>
          <div className={statusBtn ? styles.title_share_disable : styles.title_share}>
            Оставить почту:
          </div>
        </div>
        <form className={styles.form} onSubmit={()=>{setEmailStatus()}}>
          <input className={styles.input} onChange={validateMain} type="email" placeholder="example@email.com" disabled={statusBtn}/>
            <div>
              {/* {statusBtn
              ? 
                <button className={ styles.btn_default } type="button" disabled={statusEmail}>отправить</button>
              :
                <button className={statusEmail ?  styles.btn_active : styles.btn_default } type="button" disabled={statusBtn} onClick={()=>{setEmailStatus()}}>отправить</button>
              } */}

                <button className={ styles.btn } type="submit" disabled={statusBtn || !statusEmail} >отправить</button>

            </div>
        </form>
      </div>
    </div>
  )
}

export default Forms
