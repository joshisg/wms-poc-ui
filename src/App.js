import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListFarmerComponent from './component/ListFarmerComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import CreateFarmerComponent from './component/CreateFarmerComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path='/' exact element={<ListFarmerComponent />}></Route>
            <Route path='/farmers' element={<ListFarmerComponent />}></Route>
            <Route path='/add-farmer' element={<CreateFarmerComponent />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
