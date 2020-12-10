import { useState } from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import HomePage from './pages/HomePage';
import DashBoardPage from './pages/DashBoardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import { getUser, logout } from './services/userService';

import './App.css';

function App(props) {
  const [ userState, setUserState ] = useState({ user: getUser()});
  function handleSignupOrLogin() {
    setUserState({ user: getUser() });
    props.history.push('/dashboard');
  }

  function handleLogout() {
    logout();
    setUserState({ user: null });
    props.history.push('/');
  }

  return (
    <div className="App">
      <Header user={userState.user} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/" render={ props => 
          <HomePage />  
        } />
        
        <Route exact path="/dashboard" render={ props => 
          getUser() ?
          <DashBoardPage />  
          :
          <Redirect to="/login" />
        } />
        
        <Route exact path="/signup" render={ props => 
          <SignupPage handleSignupOrLogin={handleSignupOrLogin} />  
        } />
        
        <Route exact path="/login" render={ props => 
          <LoginPage handleSignupOrLogin={handleSignupOrLogin} />  
        } />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
