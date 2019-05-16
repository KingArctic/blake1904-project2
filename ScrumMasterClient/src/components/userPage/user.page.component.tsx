import React from 'react';
import { Card, CardBody, CardTitle, Row, Container } from 'reactstrap';
import { UserInfoComponent } from './user.info.component';
import { User } from '../../model/user';
import { UserIconComponent } from './user.icon.component';
import { UserAchieveComponent } from './user.achievements';

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
            <div id="user-page"  >
                <Container id="user-card-c">
                    <Card id="user-card-content">
                        <CardBody className="justify-content-center text-center">
                            <Row className="justify-content-md-center ">
                                <UserIconComponent user={this.props.user} /></Row>
                            <Row className="justify-content-center"><CardTitle><h5 className="titles">USERNAME</h5></CardTitle></Row>
                            <Row className="justify-content-center"> <CardTitle><h5 className="title">Rank</h5></CardTitle></Row>
                            <Row className="justify-content-center"> <CardTitle>{"<"}Level{">"}</CardTitle></Row>

                        </CardBody>
                    </Card>
                </Container>
                <Row>
                <Container id="user-achieve-c">
                    <UserAchieveComponent user={this.props.user}/>
                </Container>
                <Container id="user-info-c">
                    <UserInfoComponent user={this.props.user} />
                </Container>
                </Row>
            </div>
        )
    }
}