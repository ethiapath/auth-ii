import React, { Component } from 'react';
import axios from 'axios'
import { Form } from './';
class Register extends Component {
  state = {
    hasRegistered: false
  }
  register = async (creds) => {
    try {
      const userId = await axios.post(process.env.REACT_APP_API_URL + '/api/register', creds)
      if (userId) {
        await this.setState({ hasRegistered: true })
      }
      console.log('register', userId)
    } catch(err) {
      console.log(err)
    }
  }

  render() { 
    return ( 
      <div className="Register">
        <Form {...{ 
          inputs: { username: '', password: ''},
          onSubmit: this.register,
          formTitle: 'Register',
          action: 'Register'
        }} />
        <div>
        {this.state.hasRegistered ? (
          <div>You have registerd!</div>
        ): undefined} 
        </div>
      </div>
     )
  }
}
 
export default Register;