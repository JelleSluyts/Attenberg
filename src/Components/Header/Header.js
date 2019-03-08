import React from 'react';
import styles from './Header.module.css';
import Button from '../../Components/Button/Button.js';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  state = {
    showNav: false
  }

  handleClick = (props) => {
    if (this.state.showNav === false) {
      this.setState({showNav: true});
    } else {
      this.setState({showNav:false});
    }
  }

  render() {
    return (
      <div>
        <div className={styles.wrapper}>
          <header className={styles.header} style={{display: this.state.showNav ? 'block' : 'block' }}>
            <h1 className={styles.title}>Attenberg</h1>
          </header>
          <nav className={styles.nav} style={{display: this.state.showNav ? 'block' : 'none' }}>
            <ul className={styles.items}>
              <li className={styles.item}>
                <Link to='/about'>about</Link>
              </li>
              <li className={styles.item}>
                <Link to='/contactform'>contact</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.btn}>
            <Button onPress={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
