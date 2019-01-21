import React from 'react';
import Header from '../../Components/Header/Header.js';
import Projects from '../../Components/Projects/Projects.js';
import Contact from '../../Components/Contact/Contact.js';
import About from '../../Components/About/About.js';
import ProjectPage from '../../Components/ProjectPage/ProjectPage.js';
import Wordpress from '../../Util/Wordpress.js';
import styles from './App.css';
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      projectList: [],
    };
  }
  
  componentDidMount() {
    Wordpress.getProjects().then(results => {
      this.setState({projectList: results});
    })
  }

  render() {
    return (
      <div>
        <Route exact path='/' component={Header} />
        <Route exact path='/' render={ (projectList) =>
            <Projects projectList={this.state.projectList}/>
        }/>
        <Route exact path='/ProjectPage/:id' component={ProjectPage}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/About' component={About}/>
      </div>
    );
  }
}

export default App;
