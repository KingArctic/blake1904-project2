import React  from 'react';
import { User } from '../model/user';
import avatar from '../assets/avt.png';

interface Iuser {
    user: User;
      
} 
export class UserCard extends React.Component<Iuser> {
    render() {
    
      return (
        <div className="column">
        
        <span className="name">Name: </span><span className="box"> {this.props.user.username}</span>
        <span className="points">Points: </span><span className="box">00000</span>
        <img src={avatar}
            className="genericAvatar"
            alt="..." />
    
        </div>


      )
    }
}

export default UserCard;