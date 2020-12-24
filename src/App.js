import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NotFound from './component/NotFound/NotFound';
import ApartmentDetail from './pages/ApartmentDetail';
import Login from "./pages/Login";
import Home from './pages/Home';
import List from './pages/List';
import Register from './pages/Register';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={List} />
          <Route exact path="/post/:id" component={ApartmentDetail} />
          <Route exact path="/host/login" component={Login} />
          <Route exact path="/renter/login" component={Login} />
          <Route exact path="/renter/register" component={Register} />
          <Route exact path="/host/register" component={Register} />
          {/* <Route exact path="/profile" component={} /> */}
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;