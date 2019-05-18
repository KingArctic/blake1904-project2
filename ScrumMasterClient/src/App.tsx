import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import './include/bootstrap';
import { HomeComponent } from './components/home/home.component';
import SignInComponent from './components/sign-in/sign-in.component';
import { Provider } from 'react-redux';
import { store } from './Store';
import { NavComponent } from './components/nav/nav.component';
import { SISelectorComponent } from './components/shop-inventory-selector/shop-inventory-selector.component';
import  UserPageComponent  from './components/userPage/user.page.component';
import { TitleComponent } from './components/titleComponent';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div >
      <NavComponent />
      </div>
      <br/>
        <div id="main-content-container" style={{ paddingLeft: '10px' }}>
        <TitleComponent/>
        <div id="main-content-container">
          <Switch>
            <Route path="/home" component={HomeComponent} />
            <Route path="/sign-in" component={SignInComponent} />
            <Route path="/user-page" component={UserPageComponent} />
            <Route component={SISelectorComponent} />
          </Switch>
          </div>
          </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
