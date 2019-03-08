import React from 'react';
import styles from './ContactForm.module.css';
import Button from '../../Components/ControlledFormFields/Button/Button.js';
import Input from '../../Components/ControlledFormFields/Input/Input.js';
import TextArea from '../../Components/ControlledFormFields/TextArea/TextArea.js';
import CloseButton from '../../Components/CloseButton/CloseButton.js';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        email: '',
        message: ''
      }
    }
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: '',
        email: '',
        message: ''
      },
    })
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState( prevState => {
      return {
        newUser : {
          ...prevState.newUser,
          [name]: value
        }
      }
    }, () => console.log(this.state.newUser)
    )
  }

  handleTextArea(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          message: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  render() {
    return (
      <div className={styles.container}>
        <form action="https://formspree.io/ana.ramon.michelena@gmail.com" method="POST">
          <input type="hidden" name="_next" value="http://www.attenberg.be/thankyou"/>
          <Input
            type= {'text'}
            title= {'Full Name'}
            name= {'name'}
            value= {this.state.newUser.name}
            placeholder= {'Enter your name'}
            handleChange = {this.handleInput}
          /> {/* Name of the user */}
          <Input
            type= {'email'}
            title= {'Email'}
            name= {'email'}
            value= {this.state.newUser.email}
            placeholder= {'Enter your email'}
            handleChange = {this.handleInput}
          /> {/* Input for Age */}
          <TextArea
            title= {'Message'}
            name= {'TextArea'}
            value= {this.state.newUser.message}
            placeholder= {'Ask me anything'}
            handleChange = {this.handleTextArea}
            rows = {40}
          /> {/* About you */}
          <Button
            title= {"submit"}
            action= {this.handleFormSubmit}
          /> {/* Submit */}
        </form>
        <div className={styles.btn}>
          <CloseButton onPress={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default ContactForm;
