import React from 'react';
import styles from './Button.css';

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
    console.log(this.state.class);
  return (
      <div className={this.state.class} onClick={this.click}>
        <span className={styles.hamburger__TopBun}></span>
        <span className={styles.hamburger__BottomBun}></span>
      </div>


    /*
    <div>
      <div className={styles.menu}>
        <div className={this.state.class} onClick={this.click}>
          <div className={styles.bit1}></div>
          <div className={styles.bit2}></div>
          <div className={styles.bit3}></div>
        </div>
      </div>
    </div>
    */
  );
  }
}


export default Button;
