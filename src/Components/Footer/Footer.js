import React from 'react';
import styles from './Footer.module.css';

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.wrapperFooter}>
        <h2 className={styles.footer}>{this.props.title}</h2>
      </div>
    );
  }
}

export default Footer;
