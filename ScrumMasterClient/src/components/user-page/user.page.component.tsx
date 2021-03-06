import React from 'react';
import { Card, CardBody, CardTitle, Row, Container } from 'reactstrap';
import { UserInfoComponent } from './user.info.component';
import { UserIconComponent } from './user.icon.component';
import { UserAchieveComponent } from './user.achievements';
import { IState, IAuthState } from '../../reducers';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { User } from '../../model/user';
import  SignInComponent  from '../sign-in/sign-in.component';


interface IUPageProps extends RouteComponentProps {
    user: IAuthState;
    defaultUser: User
}
export class UserPageComponent extends React.Component<IUPageProps>{

    render() {
        console.log(this.props.user);
        if(this.props.user && this.props.user.currentUser){
            console.log('inside'+ this.props.user);
        return (
            <div id="user-page"  >
                <Container id="user-card-c">
                    <Card id="user-card-content">
                        <CardBody className="justify-content-center text-center">
                            <Row className="justify-content-md-center ">
                                <UserIconComponent user={this.props.user.currentUser} /></Row>
                            <Row className="justify-content-center"><CardTitle><h5 className="titles">{this.props.user.currentUser.username}</h5></CardTitle></Row>
                            <Row className="justify-content-center"> <CardTitle><h5 className="title">Rank</h5></CardTitle></Row>
                            <Row className="justify-content-center"> <CardTitle>{"<"}Level {this.props.user.currentUser.level}{">"}</CardTitle></Row>
                            <Row className="justify-content-center"> <CardTitle>{"<"}Points: {this.props.user.currentUser.points}{">"}</CardTitle></Row>
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
            return(
              <div>
              <div> <SignInComponent/></div>
              </div>
            )
          }
}}
const mapStateToProps = (state: IState) => {
    return {
      user: state.auth
  
    }
  }
  

  
  export default (connect(mapStateToProps)(UserPageComponent));