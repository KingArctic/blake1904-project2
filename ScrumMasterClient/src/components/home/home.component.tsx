import React from 'react';
import Title from '../titleComponent';
import UserCard from '../userCard';
import { User } from '../../model/user';
import ProgressBarComponent from '../ProgressComponent';
import QuoteComponent from '../QuoteComponent';
import { Card, CardBody, CardTitle, Row, Container } from 'reactstrap';

export class HomeComponent extends React.Component {
  
  aUser = new User(1,"jd","none","Jehudi");
  
  render() {
    return (
      <>
      <Title />
      <UserCard user={this.aUser}/>
      <div className="homeContainer">
      
      
      <QuoteComponent />
      <ProgressBarComponent />
        </div>
        </>
    );
  }
}

export default HomeComponent;