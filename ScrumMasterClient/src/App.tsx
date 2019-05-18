import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import './include/bootstrap';
import SignInComponent from './components/sign-in/sign-in.component';
import { Provider } from 'react-redux';
import { store } from './Store';
import { NavComponent } from './components/nav/nav.component';
import { SISelectorComponent } from './components/shop-inventory-selector/shop-inventory-selector.component';
import { ScrollingScoreboardComponent } from './components/scoreboard/scrolling-scoreboard.component';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavComponent />
        <div id="main-content-container">
          <Switch>
            <Route path="/home" component={ScrollingScoreboardComponent} />
            <Route path="/sign-in" component={SignInComponent} />
            <Route component={SISelectorComponent} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
