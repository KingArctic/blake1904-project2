import React from 'react';

import UserCard from '../userCard';
import { User } from '../../model/user';
import QuoteComponent from '../QuoteComponent';
import Description from './DescriptionComponent';

//import NewUserComponent from './RegisterForm';
import { ScrollingScoreboardComponent } from '../scoreboard/scrolling-scoreboard.component';
import SignInComponent from '../sign-in/sign-in.component';
import { NewUser } from '../../model/NewUser';
import { IAuthState, IState } from '../../reducers';
import { connect } from 'react-redux';

interface ISelectorProps {
  user: IAuthState;
}

export class HomeComponent extends React.Component<any,ISelectorProps> {

  aUser = new NewUser("Danae", "Nae", "name", undefined,);
  point = 80;
  topic = 1;

  render() {
    if(this.props.user && this.props.user.currentUser){
    return (
      <div>
        <div className="homeContainer">
          <div className="home_center">
          
            <UserCard user={this.aUser} />
            Current Scrum Master
            <Description />

            <QuoteComponent />
          </div>
          
        </div> 
        {/* <ScrollingScoreboardComponent /> */}
      </div>

    );
  }else {
    return (
      <div>
        <div className="homeContainer">
          <div className="home_center">
          
            <UserCard user={this.aUser} />
            Current Scrum Master
            <Description />

            <QuoteComponent />
          </div>
          
          <div className="sign_in">
          
            <SignInComponent />
          </div>
        </div> 
        {/* <ScrollingScoreboardComponent /> */}
      </div>
    )}
}
}
const mapStateToProps = (state: IState) => {
  return {
      user: state.auth

  }
}

export default(connect(mapStateToProps)(HomeComponent));