import React from 'react';
import Title from '../titleComponent';
import UserCard from '../userCard';
import { User } from '../../model/user';
import ProgressBarComponent from '../ProgressComponent';
import QuoteComponent from '../QuoteComponent';
import { Card, CardBody, CardTitle, Row, Container } from 'reactstrap';
import Description from './DescriptionComponent';
import SignInComponent from '../sign-in/SignInComponent';

export class HomeComponent extends React.Component {
  
  aUser = new User(0,"UNKNOWN","none","UNKNOWN");
  
  render() {
    return (
      
      <div className="homeContainer">
      <div className="columns">
      <Title />
      <div className="rowsCenter">
      
      <UserCard user={this.aUser}/>
      <SignInComponent />
      </div>
      
      <div className="columns">
      <Description />
      
      <QuoteComponent />
      <ProgressBarComponent />
        </div>
        </div>
      </div> // container column
        
    );
  }
}

export default HomeComponent;