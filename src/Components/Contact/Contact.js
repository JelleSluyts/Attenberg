import React from 'react';
import styles from './Contact.css';
import CloseButton from '../../Components/CloseButton/CloseButton.js';

/* hier zit de styling al juist*/
/*
class Contact extends React.Component {

  render() {
      return (
        <div>
          <div className={styles.container}>
            <h1 className={styles.title}>Contact us</h1>
            <form id="contact" action="" method="post">
              <fieldset>
                <input placeholder="name" type="text" tabindex="1" required autofocus />
              </fieldset>
              <fieldset>
                <input placeholder="email" type="email" tabindex="2" required />
              </fieldset>
              <fieldset>
                <textarea placeholder="message" tabindex="3" required></textarea>
              </fieldset>
              <fieldset>
                <button classname={styles.btnSubmit} name="submit" type="submit" id="contact-submit" data-submit="...Sending">submit</button>
              </fieldset>
            </form>
          </div>
          <div className={styles.btn}>
            <CloseButton onPress={this.handleClick} />
          </div>
        </div>
      );
  }
}


export default Contact;

*/

import Input from '../../Components/Input/Input.js';
import TextArea from '../../Components/TextArea/TextArea.js';
import FormButton from '../../Components/FormButton/FormButton.js';


class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        email: '',
        about: ''
      }
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleMail = this.handleMail.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch('http://example.com',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })
    })
  }

  handleClearForm(e) {
    // Logic for resetting the form
    e.preventDefault();
    this.setState({
      newUser: {
        name: '',
        age: '',
        gender: '',
        skills: [],
        about: ''
      },
    })
  }

  handleFullName(e) {
   let value = e.target.value;
   this.setState( prevState => ({ newUser :
        {...prevState.newUser, name: value
        }
      }))
  }

  handleMail(e) {
   let value = e.target.value;
   this.setState( prevState => ({ newUser :
        {...prevState.newUser, email: value
        }
      }))
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h1 className={styles.title}>Contact us</h1>
          <form className="container" onSubmit={this.handleFormSubmit}>
            <Input
              type={'text'}
              name= {'name'}
              value={this.state.newUser.name}
              placeholder = {'name'}
              handleChange = {this.handleFullName} />{/* Name of the user */}
            <Input
              type={'text'}
              name= {'email'}
              value={this.state.newUser.email}
              placeholder = {'email'}
              handleChange = {this.handleMail}/> {/* Input for Age */}
            <TextArea
              rows={10}
              value={this.state.newUser.about}
              name={"message"}
              handleChange={this.handleTextArea}
              placeholder = {"message"}/> {/* About you */}
            <FormButton
              action={this.handleFormSubmit}
              type={"primary"}
              title={"Submit"}
              className ={styles.btnSubmit}/>{" "}
          </form>
        </div>
        <div className={styles.btn}>
          <CloseButton onPress={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Contact;
