import logo from './logo.svg';
import './App.css';

import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from './components/pages/Home';
import Service from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/service' component={Service}/>
          <Route path='/products' component={Products}/>
          <Route path='/SignUp' component={SignUp}/>
        </Switch>
      </Navbar>
    </Router>
  );
}

export default App;
