import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  singIn() {
    console.log('this.state', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
      this.setState({error})
    })
  }

  render(){
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign In</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            style={{marginRight: '5px'}}
            placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            className="form-control"
            type="password"
            style={{marginRight: '5px'}}
            placeholder="password"
            onChange={event => this.setState({password: event.target.value})}
           />
           <button
             className="btn btn-primary"
             type="button"
             onClick={() => this.singIn()}
             >
               Sign In
             </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signup'}>Create an Account</Link></div>
      </div>
    )
  }
}

export default SignIn;
