import React from 'react';
import styles from './CloseButton.module.css';

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
