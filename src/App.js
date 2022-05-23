  import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListFarmerComponent from './component/ListFarmerComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import CreateFarmerComponent from './component/CreateFarmerComponent';
import UpdateFarmerComponenet from './component/UpdateFarmerComponenet';





function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListFarmerComponent}></Route>
            <Route path="/farmers" component={ListFarmerComponent}></Route>
            <Route path="/add-farmer" component={CreateFarmerComponent}></Route>
            <Route path = "/update-farmer/:farmerId" component ={UpdateFarmerComponenet}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>

  );
}

export default App;
