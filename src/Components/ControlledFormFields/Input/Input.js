import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  return (
    <div className={styles.container}>
      <label htmlFor={props.name} className={styles.title}>{props.title}</label>
      <input
        required
        className={styles.inputField}
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default Input;
