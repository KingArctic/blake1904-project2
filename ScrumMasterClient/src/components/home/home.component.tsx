import React from 'react';

import UserCard from '../userCard';
import { User } from '../../model/user';
import QuoteComponent from '../QuoteComponent';
import Description from './DescriptionComponent';

//import NewUserComponent from './RegisterForm';
import { ScrollingScoreboardComponent } from '../scoreboard/scrolling-scoreboard.component';
import SignInComponent from '../sign-in/sign-in.component';

export class HomeComponent extends React.Component {

  aUser = new User(undefined, undefined, "name", undefined, undefined, undefined, undefined, undefined, []);
  point = 80;
  topic = 1;

  render() {
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

    );
  }
}

export default HomeComponent;