import React from 'react';
import Title from '../titleComponent';
import UserCard from '../userCard';
import { User } from '../../model/user';
import ProgressBarComponent from '../ProgressComponent';

export class HomeComponent extends React.Component {
  
  aUser = new User(1, 2,"jd","none","Jehudi");
  
  render() {
    return (
      <>
      <Title />
      <div className="homeContainer">
      
      <UserCard user={this.aUser}/>
      <ProgressBarComponent />
        </div>
        </>
    );
  }
}

export default HomeComponent;