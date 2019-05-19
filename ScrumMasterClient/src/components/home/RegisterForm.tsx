
import React from 'react';
import { User } from '../../model/user';
import { NewUser } from '../../model/NewUser';

interface IUserUpdateState {
  errorMessage: string;
  user: NewUser;
}

export class NewUserComponent extends React.Component<any, IUserUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      user: new NewUser(undefined, undefined, undefined, undefined)
    };
  }

  submit = async (event) => {
    event.preventDefault();
    console.log('attempting to login');

    console.log(this.state.user);
    const name = this.state.user.name;
    const username = this.state.user.username;
    const email = this.state.user.email;
    const password = this.state.user.password;

    let newuser = { 
      name: name,
      username: username,
      email: email,
      password: password
    }

    let toSend = await JSON.stringify(newuser)

    try {
      const resp = await fetch('http://localhost:8081/user', {
        method: 'POST',
        credentials: 'include',
        body: toSend,
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

      // if (resp.status === 401) {
      //   this.setState({
      //     errorMessage: 'Invalid Credentials'
      //   });
      // } else if (resp.status === 200) {

      //   // {this.renderProfile()}
      //   // updateCurrentUser(data);
        
      // } else {
      //   this.setState({
      //     errorMessage: 'Cannot Login At This Time'
      //   });
      // }
      this.props.history.push('/user-page');
    } catch (err) {
      console.log(err);
    }
  }

  updateUsername = async (event) => {
    await this.setState({
      user: {
        ...this.state.user,
        username: event.target.value
      }
    });
  }

  updatePassword = async (event) => {
    await this.setState({
      user: {
        ...this.state.user,
        password: event.target.value
      }
    });
  }
  updateName = async (event) => {
    await this.setState({
      user: {
        ...this.state.user,
        name: event.target.value
      }
    });
  }

  updateEmail = async (event) => {
    await this.setState({
      user: {
        ...this.state.user,
        email: event.target.value
      }
    });
  }

  render() {
    const { user, errorMessage } = this.state;
    return (
      <>
        <form className="form-updateUser" onSubmit={this.submit}>
          <h1 className="h3 mb-3 font-weight-normal">Please enter fields</h1>
          <label htmlFor="inputUsername" className="sr-only">Username</label>
          <input type="text" id="inputUsername" name="username"
            className="form-control" placeholder="Username"
            value={user.username} onChange={this.updateUsername} />

          <label htmlFor="inputFirstName" className="sr-only">First Name</label>
          <input type="text" id="inputFirstName" name="password"
            className="form-control" placeholder="Name"
            value={user.name} onChange={this.updateName} />

          <label htmlFor="inputEmail" className="sr-only">Email</label>
          <input type="text" id="inputEmail" name="password"
            className="form-control" placeholder="Email"
            value={user.email} onChange={this.updateEmail} />

          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" name="password"
            className="form-control" placeholder="Password"
            value={user.password} onChange={this.updatePassword} />

          <button className="btn btn-lg btn-primary btn-block" type="submit">Add User</button>
          <p id="login-error">{errorMessage}</p>
        </form>
        {/* {this.renderProfile()} */}
      </>
    );

  }
}
export default NewUserComponent;
