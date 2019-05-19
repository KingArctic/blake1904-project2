import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { User } from '../../model/user';

interface IUserInfoProps {
    user: User;
}

export class UserInfoComponent extends React.Component<IUserInfoProps> {
  render() {

    const answers = ['answer', 'wrong 1', 'wrong 2', 'wrong 3']
    let random = [-1, -1, -1, -1];
    let counter = 0;

    while (counter < 4) {
        let temp = Math.floor(Math.random() * 4);
        let found = false;
        for (let i = 0; i < random.length; i++) {
            if (temp === random[i]) {
                found = true;
            }
        }

        if (!found) {
            random[counter] = temp;
            counter++;
        }
    }

    console.log(answers);
    console.log(random);

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
            <CardText>{answers[random[0]]}</CardText>
            <CardText>{answers[random[1]]}</CardText>
            <CardText>{answers[random[2]]}</CardText>
            <CardText>{answers[random[3]]}</CardText>
        </CardBody>
        <div>
        <Button> Edit </Button>
        </div>
    </Card>
</div>
  
  )}
}
}