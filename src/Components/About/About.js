import React from 'react';
import styles from './About.css';
import CloseButton from '../../Components/CloseButton/CloseButton.js';

class About extends React.Component {
  constructor() {
    super();
    this.state= {
      title: "about",
      content: "",
      image: "",
    }
  }

  componentDidMount() {
    const projectsUrl = 'http://localhost/wordpress/index.php/wp-json/wp/v2/about?_embed';
    fetch(projectsUrl)
      .then(res => res.json())
      .then(res => {
        this.setState({
          title: res[0].title.rendered,
          content: res[0].content.rendered,
          image: res[0]._embedded['wp:featuredmedia'][0].source_url,
        });
      })
  }

  render() {
    console.log(this.state.image);
      return (
        <div>
          <div className={styles.container}>
            <div className={styles.info}>
              <h1 className={styles.title}>{this.state.title}</h1>
              <p className={styles.text}>Attenberg is a creative studio specialised in architectural visualisation.</p>
            </div>
            <img className={styles.contactImage} src={this.state.image} alt="image"/>
          </div>
          <div className={styles.btn}>
            <CloseButton onPress={this.handleClick} />
          </div>
        </div>
      );
  }
}


export default About;
