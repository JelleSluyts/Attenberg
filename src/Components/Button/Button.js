import React from 'react';
import styles from './Button.module.css';

class Button extends React.Component {
  constructor(props) {
      super(props);
      this.state = {'active': false, 'class': `${styles.hamburger}`};
    }

  handleClick = (id) => {
    if(this.state.active){
      this.setState({'active': false,'class': `${styles.hamburger}`});
    }else{
      this.setState({'active': true,'class': `${styles.open} ${styles.hamburger}`});
    }
  }

  click = () => {
    this.handleClick();
    this.props.onPress();
  }

  render() {
    return (
      <div className={this.state.class} onClick={this.click}>
        <span className={styles.hamburger__TopBun}></span>
        <span className={styles.hamburger__BottomBun}></span>
      </div>
    );
  }
}

export default Button;
