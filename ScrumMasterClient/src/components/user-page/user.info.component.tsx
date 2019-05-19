import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { User } from '../../model/user';
import { render } from 'enzyme';

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
        </CardBody>
        <div>
        <Button> Edit </Button>
        </div>
    </Card>
</div>
  
  )}
}
}