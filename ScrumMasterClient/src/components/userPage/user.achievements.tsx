import React from 'react';
import { User } from '../../model/user';
import { Container, Card, CardBody } from 'reactstrap';

interface IUserAchieveProps {
    user: User;
}
export class UserAchieveComponent extends React.Component<IUserAchieveProps> {

    render() {
            return (
                <Card id="user-info-content" >
                <CardBody>
                <div>
                    <h5 className="titles"> Achievements</h5>
                </div>
                <div className="button-container">
                    <img className="btn-icon btn-round"
                        src="https://img.icons8.com/dusk/64/000000/prize.png"
                        color="facebook" />

                    <img className="btn-icon btn-round"
                        src="https://img.icons8.com/dusk/64/000000/prize.png"
                        color="facebook" />

                    <img className="btn-icon btn-round"
                        src="https://img.icons8.com/dusk/64/000000/prize.png"
                        color="facebook" />

                </div>
                </CardBody>
                </Card>
            )
    }
}