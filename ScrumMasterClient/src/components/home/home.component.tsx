import React from 'react';

import UserCard from '../userCard';
import { User } from '../../model/user';
import ProgressBarComponent from '../ProgressComponent';
import QuoteComponent from '../QuoteComponent';
import { Card, CardBody, CardTitle, Row, Container } from 'reactstrap';
import Description from './DescriptionComponent';
import SignInComponent from '../sign-in/SignInComponent';
import Space from '../SpaceComponent';
import CurrentItems from './CurrentItems';
import NewUserComponent from './RegisterForm';

export class HomeComponent extends React.Component {
  
  aUser = new User(0,"UNKNOWN","none","UNKNOWN");
  point = 80;
  topic = 1;
  
  render() {
    return (
      
      <div className="homeContainer">
      <div className="column">
      <Title />
      <div className="rowsCenter">
      
      <div className="column">
      
      <CurrentItems />
      <ProgressBarComponent 
      point={this.point}
      />
      </div>
      
      <UserCard user={this.aUser}/>
      
      <SignInComponent />
      </div>
      
     
        </div>
        <div className="column">
      <Space />
      <div className="rowsCenter">
      <Description />
      <NewUserComponent/>
      </div>
      
      <Space />
      <QuoteComponent />
      <Space />
        </div>
      </div> // container column
        
    );
  }
}

export default HomeComponent;