import React from 'react';
import styles from './ProjectPage.module.css';
import CloseButton from '../../Components/CloseButton/CloseButton.js';
import Swipeable from 'react-swipeable';

class ProjectPage extends React.Component {
  constructor() {
    super();
    this.state= {
      images: [],
      selectedIndex: 0,
      active: true,
    }
    this._TogglePrev = this._TogglePrev.bind(this);
    this._ToggleNext = this._ToggleNext.bind(this);
    this.swipedLeft = this.swipedLeft.bind(this);
    this.swipedRight = this.swipedRight.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown',(e) => {
     this._TogglePrev(e);
     this._ToggleNext(e);
    });
    const { info } = this.props.location.state;
    let dataURL = `http://wordpress.attenberg.be/index.php/wp-json/wp/v2/work/${info}`;
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        let imageArr = [];
        if(res.acf.title !== "" && res.acf.location !== "" && res.acf.client !== "") {
            imageArr.push(
              <div className={styles.containerInfo}>
                <p className={styles.projectTitle}>{res.acf.title}</p>
                <p className={styles.projectLocation}>{res.acf.location}</p>
                <p className={styles.projectClient}>{res.acf.client}</p>
              </div>
            );
          }
        for (let imageKey in res.acf) {
            if (res.acf.hasOwnProperty(imageKey)) {
              let photoObject = res.acf[imageKey];
              if(photoObject.mime_type === 'image/jpeg'){
                imageArr.push(
                  <picture>
                    <source className={styles.image} media="(max-width: 600px)" srcset={`${photoObject.sizes.medium_large} 1x, ${photoObject.sizes.medium_large} 2x`} />
                    <source className={styles.image} media="(min-width: 600px)" srcset={`${photoObject.sizes.large} 1x, ${photoObject.sizes.large} 2x`} />
                    <source className={styles.image} media="(min-width: 1200px)" srcset={`${photoObject.url} 1x, ${photoObject.url} 2x`} />
                    <img className={styles.image} src={photoObject.sizes.large} alt="photorealistic architectural 3d render"/>
                  </picture>
                );
              }
            }
        }
        this.setState({images: imageArr});
      })
  }

  _ToggleNext(e) {
    if(e.type==='click' || e.type==='touchmove' || (e.type==='keydown' && e.keyCode === 39)){
      if(this.state.selectedIndex === this.state.images.length - 1)
        return;
        this.setState(prevState => ({
          selectedIndex: prevState.selectedIndex + 1,
          active: !this.state.active,
        }))
    }
  }

  _TogglePrev(e) {
    if(e.type==='click' || e.type==='touchmove' || (e.type==='keydown' && e.keyCode === 37)){
      if(this.state.selectedIndex === 0)
        return;
        this.setState(prevState => ({
          selectedIndex: prevState.selectedIndex - 1,
          active: !this.state.active,
        }))
    }
  }

  swipedRight(e, deltaX, deltaY, isFlick, velocity) {
    if(this.state.selectedIndex === 0)
      return;
      this.setState(prevState => ({
        selectedIndex: prevState.selectedIndex - 1,
        active: !this.state.active,
      }))
  }

  swipedLeft(e, deltaX, deltaY, isFlick, velocity) {
    if(this.state.selectedIndex === this.state.images.length - 1)
      return;
      this.setState(prevState => ({
        selectedIndex: prevState.selectedIndex + 1,
        active: !this.state.active,
      }))
  }

  render() {
    let {selectedIndex} = this.state;
    return (
      <div className={styles.main}>
        <div className={styles.container1}>
          <div onClick={this._TogglePrev} className={styles.mainBtnLeft} style={{display: this.state.selectedIndex === 0 ? 'none' : 'block' }}></div>
        </div>
        <Swipeable onSwipedLeft={this.swipedLeft} onSwipedRight={this.swipedRight}>
          <div className={this.state.active ? `${styles.slideIn}` : `${styles.slideIn1}`} >
            {this.state.images[selectedIndex]}
          </div>
        </Swipeable>
        <div className={styles.container2}>
          <div onClick={this._ToggleNext} className={styles.mainBtnRight} style={{display: this.state.selectedIndex < this.state.images.length - 1 ? 'block' : 'none' }}></div>
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
