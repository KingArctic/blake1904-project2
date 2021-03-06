import React from 'react';
import { IAuthState, IState } from '../../reducers';
import { connect } from 'react-redux';
import { login, register } from '../../actions/auth.actions';
import { RouteComponentProps, withRouter } from 'react-router';
import NewUserComponent from '../home/RegisterForm';


interface ISignInState {
  username: string;
  password: string;
  toggle: boolean;
}

interface ISignInProps extends RouteComponentProps<{}>{
  auth: IAuthState
  login: (username: string, password: string, history: any) => void
  register: (name:string, username: string, password: string, email: string, history:any) => any
}

export class SignInComponent extends React.Component<ISignInProps, ISignInState> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      toggle: false
    };

    this.toggle = this.toggle.bind(this);
  }

  async toggle() {
    let newToggle = this.state.toggle;
    await this.setState({
      toggle: !newToggle
    })
}

  submit = async (event) => {
    event.preventDefault();
    console.log('attempting to login');
    this.props.login(this.state.username, this.state.password, this.props.history);
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

  render() {
    const { username, password } = this.state;
    const errorMessage = this.props.auth.errorMessage;
    return (
      <div>
      {!this.state.toggle && <form className="form-signin" onSubmit={this.submit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputUsername" className="sr-only">Username</label>
        <input type="text" id="inputUsername" name="username"
          className="form-control" placeholder="Username"
          required value={username} onChange={this.updateUsername} />

        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" name="password"
          className="form-control" placeholder="Password"
          required value={password} onChange={this.updatePassword} />

        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p id="login-error">{errorMessage}</p>
        <button className="btn btn-lg btn-primary btn-block" onClick={this.toggle}>Register</button>
      </form>}
      {this.state.toggle && <NewUserComponent  />}
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return  {
    auth: state.auth
  }
}

const mapDispatchToProps = {
  login: login,
  register: register
}

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(SignInComponent));
