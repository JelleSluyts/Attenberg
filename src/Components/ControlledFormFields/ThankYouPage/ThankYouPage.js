import React from 'react';
import styles from './ThankYouPage.module.css';
import { Link } from 'react-router-dom';

const ThankYouPage = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Thank you for contacting us.<br/> We will get back at you soon!</p>
      <Link to='/' className={styles.home}>navigate home</Link>
    </div>
  )
}

export default ThankYouPage;
