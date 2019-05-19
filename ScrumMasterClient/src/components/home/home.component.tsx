import React from 'react';

import UserCard from '../userCard';
import { User } from '../../model/user';
import QuoteComponent from '../QuoteComponent';
import Description from './DescriptionComponent';
import SignInComponent from '../sign-in/SignInComponent';
import NewUserComponent from './RegisterForm';
import { ScrollingScoreboardComponent } from '../scoreboard/scrolling-scoreboard.component';

export class HomeComponent extends React.Component {

  aUser = new User(0, 0, "UNKNOWN", "none", "UNKNOWN");
  point = 80;
  topic = 1;

  render() {
    return (

      <div className="homeContainer">


            <div className="home_center">
            <UserCard user={this.aUser} />
            <Description />
          
          <QuoteComponent />
            </div>

            <div >
            <SignInComponent />
            <NewUserComponent />
          </div>

        <div>
        <ScrollingScoreboardComponent/>
        </div>
        </div>

    );
  }
}

export default HomeComponent;