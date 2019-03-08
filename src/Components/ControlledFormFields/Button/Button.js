import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button onClick= {props.action} className={styles.btn}> {props.title} </button>
  );
}

export default Button;
