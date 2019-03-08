import React from 'react';
import Header from '../../Components/Header/Header.js';
import Projects from '../../Components/Projects/Projects.js';
import ContactForm from '../../Components/ContactForm/ContactForm.js';
import About from '../../Components/About/About.js';
import ProjectPage from '../../Components/ProjectPage/ProjectPage.js';
import ThankYouPage from '../../Components/ControlledFormFields/ThankYouPage/ThankYouPage.js';
import Wordpress from '../../Util/Wordpress.js';
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
            <Projects projectList={this.state.projectList}/> } />
        <Route exact path='/ProjectPage/:id' component={ProjectPage}/>
        <Route path='/About' component={About}/>
        <Route path='/contactform' component={ContactForm}/>
        <Route path='/thankyou' component={ThankYouPage}/>
      </div>
    );
  }
}

export default App;
