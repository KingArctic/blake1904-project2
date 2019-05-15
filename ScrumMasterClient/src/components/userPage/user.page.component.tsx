import React from 'react';
import { Card, CardBody, CardText, CardFooter, Button, CardTitle, ListGroup, ListGroupItem, Row, Col } from 'reactstrap';
import { UserInfoComponent } from './user.info.component';
import { User } from '../../model/user';
import { UserIconComponent } from './user.icon.component';

interface IUPageProps {
    user: User[];
}
export class UserPageComponent extends React.Component<any, IUPageProps>{
    constructor(props: any) {
        super(props);
        this.state = {
            user: []
        };
    }

    render() {
        return (
            <div>
                <Card className="card-user">
                    <CardBody>
                        <Row className="justify-content-md-center">
                            <Col ><CardTitle>USERNAME</CardTitle></Col>
                            <Col>
                                <UserIconComponent user={this.props.user} /></Col>
                            <Col>
                            <CardTitle><h5 className="title">Rank</h5></CardTitle>
                            <CardTitle>{"<"}Level{">"}</CardTitle>
                            </Col>

                        </Row>
                    </CardBody>
                    <CardFooter>
                        <div>
                            <h5 className="achievements"> Achievements</h5>
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
                    </CardFooter>
                </Card>

                <UserInfoComponent user={this.props.user}/>

            </div>
        )
    }
}