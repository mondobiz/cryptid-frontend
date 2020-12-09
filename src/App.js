import { useState } from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import HomePage from './pages/HomePage';
import DashBoardPage from './pages/DashBoardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import { Switch, Route, withRouter } from 'react-router-dom';

import { getUser } from './services/userService';

import './App.css';

function App(props) {
  const [ userState, setUserState ] = useState({ user: getUser()});
  function handleSignupOrLogin() {
    setUserState({ user: getUser() });
    props.history.push('/dashboard');
  }
  return (
    <div className="App">
      <Header user={userState.user} />
      <Switch>
        <Route exact path="/" render={ props => 
          <HomePage />  
        } />
        
        <Route exact path="/dashboard" render={ props => 
          <DashBoardPage />  
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
