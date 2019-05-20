import React from 'react';
import { Link, /*RouteComponentProps*/ } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
// import { User } from '../../model/user';
import ClickOutside from './click.outside';
// import { IState, IAuthState } from '../../reducers';
// import { connect } from 'react-redux';

// This is the props for the Nav
// interface INavBarProps extends RouteComponentProps {
//   user: IAuthState
// }

// This is the state the Nav Bar
interface INavBarState {
  expanded: boolean,

}

export class NavComponent extends React.Component<any, INavBarState> {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }
  render() {
    return (
      <ClickOutside
        onClickOutside={() => {
          this.setState({ expanded: false });
        }}
      >
        <SideNav
          expanded={this.state.expanded}
          onToggle={(expanded) => {
            this.setState({ expanded });
          }}
          id="sideNav" >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">

            <NavItem eventKey="home">
              <NavIcon className="sidenav-icon">
                <Link to="/home" ><img alt="Home"
                  src="https://img.icons8.com/nolan/45/000000/home.png"></img></Link>
              </NavIcon>
              <NavText>
                <Link to="/home" > <h5 className="nav_text titles">Home</h5> </Link>
              </NavText>
            </NavItem>
            <NavItem eventKey="userPage">
              <NavIcon>
                <Link to="/user-page"><img alt="User Page"
                  src="https://img.icons8.com/nolan/45/000000/contacts.png"></img></Link>
              </NavIcon>
              <NavText>
                <Link to="/user-page"><h5 className="nav_text titles">My Page</h5></Link>
              </NavText>
            </NavItem>

            <NavItem eventKey="questionMaster">
              <NavIcon>
                <Link to="/question-master"> <img alt="Question Master"
                  src="https://img.icons8.com/nolan/45/000000/ask-question.png"></img></Link>
              </NavIcon>
              <NavText>
                <Link to="/question-master"><h5 className="nav_text titles">Question Master</h5></Link>
              </NavText>
            </NavItem>

            <NavItem eventKey="shop">
              <NavIcon>
                <Link to="/shop"><img alt="Coding Master" src="https://img.icons8.com/nolan/45/000000/small-business.png"></img></Link>
              </NavIcon>
              <NavText>
                <Link to="/shop"><h5 className="nav_text titles">Shop</h5></Link>
              </NavText>
            </NavItem>

          </SideNav.Nav>
        </SideNav >
      </ClickOutside>
    );
  }
}

// const mapStateToProps = (state: IState) => {
//   return {
//     user: state.auth
//   }
// }

// export default (connect(mapStateToProps)(NavComponent));

