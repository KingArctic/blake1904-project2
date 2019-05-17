import React  from 'react';
import { User } from '../model/user';
import avatar from '../assets/avt.png';

interface Iuser {
    user: User;
} 
export class UserCard extends React.Component<Iuser> {
    render() {
    
      return (
        <div className="center">
        <img src={avatar}
            className="genericAvatar"
            alt="..." />
        <div className="container">
        <span className="name">Username: {this.props.user.username}</span>
        <span className="user">UnknowN</span></div>
        
        </div>


      )
    }
}

export default UserCard;