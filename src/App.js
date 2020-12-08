import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './pages/HomePage'
import DashBoardPage from './pages/DashBoardPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

import { Switch, Route } from 'react-router-dom';

import './App.css';

// TODO import switch and route
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={ props => 
          <HomePage />  
        } />
        
        <Route exact path="/dashboard" render={ props => 
          <DashBoardPage />  
        } />
        
        <Route exact path="/signup" render={ props => 
          <SignupPage />  
        } />
        
        <Route exact path="/login" render={ props => 
          <LoginPage />  
        } />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
