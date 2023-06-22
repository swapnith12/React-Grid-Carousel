import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ResponsiveAppBar from './Navbar';
import HomePage from './HomePage';
import History from './History';
import Team from './Team';

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' exact Component={HomePage}></Route>
        <Route path='/history' exact Component={History}></Route>
        <Route path='/team' exact Component={Team}></Route>
      </Routes>
    </Router>
  );
}

export default App;
