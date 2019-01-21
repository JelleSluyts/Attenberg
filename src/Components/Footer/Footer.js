import React from 'react';
import styles from './Footer.css';

class Footer extends React.Component {

  render() {
      return (
        <div className={styles.wrapperFooter}>
            <p className={styles.footer}>{this.props.title}</p>
        </div>
      );
  }
}

export default Footer;
