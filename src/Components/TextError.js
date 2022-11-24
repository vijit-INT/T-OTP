import React from 'react'
import styles from '../Components/RegisterPage.jsx/UserRegister.module.css'

const TextError = (props) => {
  return (
    <div className={styles.TextError}>
         {
            props.children
         }
    </div>
  )
}

export default TextError