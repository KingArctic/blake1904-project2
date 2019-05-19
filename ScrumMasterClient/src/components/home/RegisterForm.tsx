
import React from 'react';
import { User } from '../../model/user';

interface IUserUpdateState {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    errorMessage: string;
    user: User;
  }
  
  export class NewUserComponent extends React.Component<any, IUserUpdateState> {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        errorMessage: '',
        user: new User (undefined,undefined,undefined,undefined,undefined,undefined,undefined, undefined, [])
      };
    }
  
    submit = async (event) => {
      event.preventDefault();
      console.log('attempting to login');
      const userX = {
        username: this.state.username,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email
      };
  
      // this.setState({userX});
  
  
      try {
        console.log(this.state.user);
        const resp = await fetch('http://localhost:8080/users/add'+ this.state.user,  {
          method: 'POST',
          credentials: 'include',
          // body: JSON.stringify(user),
          headers: {
            'content-type': 'application/json'
          }
          
        })
        const data = await resp.json();
          console.log("is this the user?");
          console.log(data);
          this.setState({
              user: data
          });
  
        console.log("what is this?");
  
        if (resp.status === 401) {
          this.setState({
            errorMessage: 'Invalid Credentials'
          });
        } else if (resp.status === 200) {
          
        // {this.renderProfile()}
         // updateCurrentUser(data);
            this.props.history.push('/Profile');
        } else {
          this.setState({
            errorMessage: 'Cannot Login At This Time'
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  
    updateUsername = (event) => {
      this.setState({
        username: event.target.value
      });
    }
  
    updatePassword = (event) => {
      this.setState({
        password: event.target.value
      })
    }
    updateFirstName = (event) => {
      this.setState({
        firstName: event.target.value
      })
    }
  
    updateLastName = (event) => {
      this.setState({
        lastName: event.target.value
      })
    }
  
    updateEmail = (event) => {
      this.setState({
        email: event.target.value
      })
    }
  
    render() {
  
      const { username, firstName, lastName, email, password, errorMessage } = this.state;
  
      
      return (
        <>
  
        <form className="form-updateUser" onSubmit={this.submit}>
          <h1 className="h3 mb-3 font-weight-normal">Please enter fields</h1>
          <label htmlFor="inputUsername" className="sr-only">Username</label>
          <input type="text" id="inputUsername" name="username"
            className="form-control" placeholder="Username"
            required value={username} onChange={this.updateUsername} />
  
          <label htmlFor="inputFirstName" className="sr-only">First Name</label>
          <input type="firstName" id="inputFirstName" name="password"
            className="form-control" placeholder="firstName"
            required value={firstName} onChange={this.updateFirstName} />
  
  <label htmlFor="inputLastName" className="sr-only">Username</label>
          <input type="text" id="inputLastName" name="lastName"
            className="form-control" placeholder="lastName"
            required value={lastName} onChange={this.updateLastName} />
  
  <label htmlFor="inputEmail" className="sr-only">Email</label>
          <input type="password" id="inputEmail" name="password"
            className="form-control" placeholder="Email"
            required value={email} onChange={this.updateEmail} />
  
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" name="password"
            className="form-control" placeholder="Password"
            required value={password} onChange={this.updatePassword} />
  
          <button className="btn btn-lg btn-primary btn-block" type="submit">Add User</button>
          <p id="login-error">{errorMessage}</p>
        </form>
        {/* {this.renderProfile()} */}
        </>
      );
  
    }
  }
  export default NewUserComponent;
  