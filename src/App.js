  import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListFarmerComponent from './component/ListFarmerComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import CreateFarmerComponent from './component/CreateFarmerComponent';
import UpdateFaremerComponent from './component/UpdateFaremerComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListFarmerComponent }></Route>
            <Route path="/farmers" component={ListFarmerComponent}></Route>
            <Route path="/add-farmer" component={CreateFarmerComponent}></Route>
            <Route path="/update-farmer/:farmerId" component={UpdateFaremerComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
