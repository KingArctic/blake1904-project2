import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { User } from '../../model/user';

interface IUserInfoProps {
    user: User;
}

export class UserInfoComponent extends React.Component<IUserInfoProps> {

  render() {
    return (
        <div>
        <Card id="user-info-content" >
            <CardBody>
                <CardTitle><h5 className="titles">User Info</h5></CardTitle>
                <CardText >Name: Danae Morgan</CardText>
                <CardText>Email: nae.chan@yahoo.com</CardText>
            </CardBody>
            <div>
            <Button> Edit </Button>
            </div>
        </Card>
    </div>
    )
  }
}