import './App.css';
import { Route, Switch } from "react-router-dom"
import HomePage from './pages/homepage/home-page.component'
import ShopPage from '../src/pages/shoppage/shoppage.component'
import Header from './components/header/header.component';
import SignInSignUpComponent from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth } from './components/firebase/firebase.util'
import React from 'react';


const HatsPage = () => (
   <div>
      <h1>HatsPage</h1>
   </div>
)


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth=null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

componentWillUnmount() {
  this.unsubscribeFromAuth();
}


  render() {
    return (
      <div className="App">
      <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path ='/' component={HomePage}/>
            <Route exact path ='/shop/hats' component={HatsPage}/>
            <Route exact path ='/shop' component={ShopPage}/>
            <Route exact path ='/signin' component={SignInSignUpComponent}/>
          </Switch>
      </div>
    );
  }

}

export default App;
