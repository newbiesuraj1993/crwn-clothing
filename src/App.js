import './App.css';
import { Route, Switch } from "react-router-dom"
import HomePage from './pages/homepage/home-page.component'
import ShopPage from '../src/pages/shoppage/shoppage.component'
import Header from './components/header/header.component';
import SignInSignUpComponent from './pages/sign-in-sign-up/sign-in-sign-up.component';


const HatsPage = () => (
   <div>
      <h1>HatsPage</h1>
   </div>
)


function App() {
  return (
    <div className="App">
    <Header />
        <Switch>
          <Route exact path ='/' component={HomePage}/>
          <Route exact path ='/shop/hats' component={HatsPage}/>
          <Route exact path ='/shop' component={ShopPage}/>
          <Route exact path ='/signin' component={SignInSignUpComponent}/>
        </Switch>
    </div>
  );
}

export default App;
