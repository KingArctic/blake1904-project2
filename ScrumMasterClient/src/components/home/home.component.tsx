import React from 'react';
import Title from '../titleComponent';
import UserCard from '../userCard';
import { User } from '../../model/user';
import ProgressBarComponent from '../ProgressComponent';
import QuoteComponent from '../QuoteComponent';
import { Card, CardBody, CardTitle, Row, Container } from 'reactstrap';
import Description from './DescriptionComponent';
import SignInComponent from '../sign-in/SignInComponent';
import Space from '../SpaceComponent';

export class HomeComponent extends React.Component {
  
  aUser = new User(0,"UNKNOWN","none","UNKNOWN");
  point = 0;
  
  render() {
    return (
      
      <div className="homeContainer">
      <div className="columns">
      <Title />
      <div className="rowsCenter">
      <ProgressBarComponent point={this.point}/>
      <UserCard user={this.aUser}/>
      
      <SignInComponent />
      </div>
      
      <div className="columns">
      <Space />
      <Description />
      <Space />
      <QuoteComponent />
      
        </div>
        </div>
      </div> // container column
        
    );
  }
}

export default HomeComponent;