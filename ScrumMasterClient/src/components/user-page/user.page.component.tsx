import React from 'react';
import { Card, CardBody, CardTitle, Row, Container } from 'reactstrap';
import { UserInfoComponent } from './user.info.component';
import { UserIconComponent } from './user.icon.component';
import { UserAchieveComponent } from './user.achievements';
import { IState, IAuthState } from '../../reducers';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { User } from '../../model/user';


interface IUPageProps extends RouteComponentProps {
    user: IAuthState;
    defaultUser: User
}
export class UserPageComponent extends React.Component<IUPageProps>{

    render() {
        if(this.props.user.currentUser){
        return (
            <div id="user-page"  >
                <Container id="user-card-c">
                    <Card id="user-card-content">
                        <CardBody className="justify-content-center text-center">
                            <Row className="justify-content-md-center ">
                                <UserIconComponent user={this.props.user.currentUser} /></Row>
                            <Row className="justify-content-center"><CardTitle><h5 className="titles">USERNAME</h5></CardTitle></Row>
                            <Row className="justify-content-center"> <CardTitle><h5 className="title">Rank</h5></CardTitle></Row>
                            <Row className="justify-content-center"> <CardTitle>{"<"}Level{">"}</CardTitle></Row>

                        </CardBody>
                    </Card>
                </Container>
                <Row>
                <Container id="user-achieve-c">
                    <UserAchieveComponent user={this.props.user.currentUser}/>
                </Container>
                <Container id="user-info-c">
                    <UserInfoComponent user={this.props.user.currentUser} />
                </Container>
                </Row>
            </div>
        )
    } else {
    return (
        <div id="user-page"  >
            <Container id="user-card-c">
                <Card id="user-card-content">
                    <CardBody className="justify-content-center text-center">
                        <Row className="justify-content-md-center ">
                            <UserIconComponent user={this.props.defaultUser} /></Row>
                        <Row className="justify-content-center"><CardTitle><h5 className="titles">USERNAME</h5></CardTitle></Row>
                        <Row className="justify-content-center"> <CardTitle><h5 className="title">Rank</h5></CardTitle></Row>
                        <Row className="justify-content-center"> <CardTitle>{"<"}Level{">"}</CardTitle></Row>

                    </CardBody>
                </Card>
            </Container>
            <Row>
            <Container id="user-achieve-c">
                <UserAchieveComponent user={this.props.defaultUser}/>
            </Container>
            <Container id="user-info-c">
                <UserInfoComponent user={this.props.defaultUser} />
            </Container>
            </Row>
        </div>
    )
}}}
const mapStateToProps = (state: IState) => {
    return {
      user: state.auth
  
    }
  }
  

  
  export default (connect(mapStateToProps)(UserPageComponent));