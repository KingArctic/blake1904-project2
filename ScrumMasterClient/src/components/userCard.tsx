import React from 'react';
import { User } from '../model/user';
import avatar from '../assets/avatar.png';
import { Card, CardBody, Row, CardTitle } from 'reactstrap';

interface Iuser {
  user: User;

}
export class UserCard extends React.Component<Iuser> {
  render() {

    return (
      <Card id="scrum_master_card">
        <CardBody className="justify-content-center text-center">
          <Row className="justify-content-md-center ">
            <img src={avatar}
              className="genericAvatar"
              alt="..." /></Row>
          <Row className="justify-content-center"><CardTitle><h5 className="titles">{this.props.user.username}</h5></CardTitle></Row>
          <Row className="justify-content-center"> <CardTitle><h5 className="title">Rank</h5></CardTitle></Row>
          <Row className="justify-content-center"> <CardTitle>{"<"}Level{">"}</CardTitle></Row>

        </CardBody>
      </Card>
    )
  }
}

export default UserCard;