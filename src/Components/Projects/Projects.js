import React from 'react';
import styles from './Projects.css';
import Footer from '../../Components/Footer/Footer.js';
import ProjectPage from '../../Components/ProjectPage/ProjectPage.js';
import { Redirect, Link, withRouter } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      title: " ",
      content: " ",
      selectedIndex: 0,
    }
    this.getImages = this.getImages.bind(this);
  }

  getImages() {
    return this.props.projectList.map((post,index) =>
    <div key={post.id}>
      <div className={styles.projects}>
        <VisibilitySensor onChange={isVisible => this._onChange(isVisible, post.title, post.id, index)}>
          <img src={post.featureImage.media_details.sizes.large.source_url} className={styles.projectImage} alt='projectImage' data-content={post.content}/>
        </VisibilitySensor>
      </div>
    </div>
    )
  }

  _onChange = (isVisible, param, param2, param3) => {
    isVisible && this.setState({
      ...this.state,
      title: param,
      content: param2,
      selectedIndex: param3 + 1,
    });
  };

  render() {
    return (
      <div>
        <Link to={{pathname: `/ProjectPage/${this.state.title}`,
                    state: {
                    info: `${this.state.content}`}
                  }}>{this.getImages()}
        </Link>
        <Link to={{pathname: `/ProjectPage/${this.state.title}`,
                    state: {
                    info: `${this.state.content}`}
                  }}>
          <Footer title={this.state.title}/>
        </Link>
        <ul className={styles.funky}>
          <li>{this.state.selectedIndex}</li>
          <li>/</li>
          <li>{this.props.projectList.length}</li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Projects);
