
import React from 'react';
import { NewUser } from '../../model/NewUser';
import { RouteComponentProps, withRouter } from 'react-router';
import { register } from '../../actions/auth.actions';
import { connect } from 'react-redux';

interface IUserUpdateState {
  errorMessage: string;
  user: NewUser;
}

interface IUserUpdateProps extends RouteComponentProps<{}> {
  register: (name:string, username: string, password: string, email: string, history:any) => any
}

export class NewUserComponent extends React.Component<IUserUpdateProps, IUserUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      user: new NewUser(undefined, undefined, undefined, undefined)
    };
  }

  submit = async (event) => {
    event.preventDefault();
    this.props.register(this.state.user.name, this.state.user.username, this.state.user.password, this.state.user.email, this.props.history)
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
      </>
    );

  }
}

const mapDispatchToProps = {
  register: register
}

export default withRouter(connect(undefined,mapDispatchToProps)(NewUserComponent));
