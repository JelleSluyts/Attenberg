import React from 'react';
import styles from './ProjectPage.css';
import CloseButton from '../../Components/CloseButton/CloseButton.js';
import { Link } from 'react-router-dom';
import Swipeable from 'react-swipeable';

class ProjectPage extends React.Component {
  constructor() {
    super();
    this.state= {
      images: [],
      selectedIndex: 0,
    }
    this._TogglePrev = this._TogglePrev.bind(this);
    this._ToggleNext = this._ToggleNext.bind(this);
    this.swipedLeft = this.swipedLeft.bind(this);
    this.swipedRight = this.swipedRight.bind(this);
    this.testKeyDown = this.testKeyDown.bind(this);
    console.log(this.state.images);
  }

  componentDidMount() {
    const { info } = this.props.location.state;
    let dataURL = `http://localhost/wordpress/index.php/wp-json/wp/v2/work/${info}`;
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        let imageArr = [];
        for (let imageKey in res.acf) {
            if (res.acf.hasOwnProperty(imageKey)) {
              let photoObject = res.acf[imageKey];
              if(photoObject.mime_type == 'image/jpeg'){
                imageArr.push(<img className={styles.image} src={(photoObject.sizes.large)} />)
              }
            }
        }
        this.setState({images: imageArr});
      })
  }

  _ToggleNext(e) {
    if(e.type==='click' || e.type==='touchmove'){
      if(this.state.selectedIndex == this.state.images.length - 1)
        return;
        this.setState(prevState => ({
          selectedIndex: prevState.selectedIndex + 1
      }))
    }
  }


  _TogglePrev() {
    if(this.state.selectedIndex == 0)
      return;
    this.setState(prevState => ({
      selectedIndex: prevState.selectedIndex - 1
    }))
  }

  swipedRight(e, deltaX, deltaY, isFlick, velocity) {
    if(this.state.selectedIndex == 0)
      return;
    this.setState(prevState => ({
      selectedIndex: prevState.selectedIndex - 1
    }))
  }

  swipedLeft(e, deltaX, deltaY, isFlick, velocity) {
    if(this.state.selectedIndex == this.state.images.length - 1)
      return;
    this.setState(prevState => ({
      selectedIndex: prevState.selectedIndex + 1
    }))
  }

  testKeyDown(e) {
    console.log(e.key);
  }

  render() {
    let {selectedIndex, images} = this.state;
    console.log(this.state.images);
    return (
      <div className={styles.main}>
        <input onKeyDown={this.testKeyDown}
  tabIndex="0" />
        <div className={styles.container1}>
          <button  onClick={this._TogglePrev} className={styles.left}></button>
        </div>
        <Swipeable onSwipedLeft={this.swipedLeft} onSwipedRight={this.swipedRight}>
          <div className={styles.slideIn}> {this.state.images[selectedIndex]} </div>
        </Swipeable>
        <div className={styles.container2}>
          <button onClick={this._ToggleNext} className={styles.right}></button>
        </div>
        <ul className={styles.counter}>
          <li>{this.state.selectedIndex + 1}</li>
          <li>/</li>
          <li>{this.state.images.length}</li>
        </ul>
        <div className={styles.btn}>
          <CloseButton onPress={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default ProjectPage;
