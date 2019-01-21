import React from 'react';
import styles from './CloseButton.css';
import { Link } from 'react-router-dom';
/*
class CloseButton extends React.Component {
  render() {
  return (
    <div>
      <div>
        <Link to='/' className={styles.closeButton}></Link>
      </div>
    </div>
  );
  }
}
*/

class CloseButton extends React.Component {
  static contextTypes = {
    router: () => true, // replace with PropTypes.object if you use them
  }

  render() {
    return (
      <div className={styles.hamburger} onClick={this.context.router.history.goBack}>
        <span className={styles.hamburger__TopBun}></span>
        <span className={styles.hamburger__BottomBun}></span>
      </div>
    )
  }
}


export default CloseButton;
