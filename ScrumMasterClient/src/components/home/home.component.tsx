import React from 'react';

import UserCard from '../userCard';
import { User } from '../../model/user';
import QuoteComponent from '../QuoteComponent';
import Description from './DescriptionComponent';

import NewUserComponent from './RegisterForm';
import { ScrollingScoreboardComponent } from '../scoreboard/scrolling-scoreboard.component';
import SignInComponent  from '../sign-in/sign-in.component';

export class HomeComponent extends React.Component {

  aUser = new User(undefined,undefined,"name",undefined,undefined,undefined,undefined, undefined, []);
  point = 80;
  topic = 1;

  render() {
    return (
      <div>
      <ScrollingScoreboardComponent/>
      
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

       
        </div>
        </div>

    );
  }
}

export default HomeComponent;