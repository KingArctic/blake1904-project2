import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { User } from '../../model/user';

interface IUserInfoProps {
    user: User;
}

export class UserInfoComponent extends React.Component<IUserInfoProps> {

  render() {
    return (
        <div>
        <Card >
            <CardBody>
                <CardTitle >User Info</CardTitle>
                <CardText>Name: Danae Morgan</CardText>
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