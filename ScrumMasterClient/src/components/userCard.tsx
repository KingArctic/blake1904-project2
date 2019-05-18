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
        <img src={avatar}
            className="genericAvatar"
            alt="..." />
        <span className="name">Name: </span><span className="box"> {this.props.user.username}</span>
        <span className="points">Points: </span><span className="box">00000</span>
    
        </div>


      )
    }
}

export default UserCard;