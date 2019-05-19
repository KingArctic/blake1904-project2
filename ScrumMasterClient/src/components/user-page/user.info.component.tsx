import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { User } from '../../model/user';

interface IUserInfoProps {
    user: User;
}

export class UserInfoComponent extends React.Component<IUserInfoProps> {

  render() {

    if (this.props.user){
    return (
        <div>
        <Card id="user-info-content" >
            <CardBody>
                <CardTitle><h5 className="titles">User Info</h5></CardTitle>
                <CardText >Name: {this.props.user.name}</CardText>
                <CardText>Email: {this.props.user.email}</CardText>
                <CardText>Money: {this.props.user.account.amount}</CardText>
            </CardBody>
            <div>
            <Button> Edit </Button>
            </div>
        </Card>
    </div>
    )
  } else{
    return(
    <div>
    <Card id="user-info-content" >
        <CardBody>
            <CardTitle><h5 className="titles">User Info</h5></CardTitle>
            <CardText >Name:</CardText>
            <CardText>Email:</CardText>
            <CardText>Money:</CardText>
        </CardBody>
        <div>
        <Button> Edit </Button>
        </div>
    </Card>
</div>
  
  )}
}
}