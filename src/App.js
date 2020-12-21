import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NotFound from './component/NotFound/NotFound';
import ApartmentDetail from './pages/ApartmentDetail';
import Home from './pages/Home';
import List from './pages/List';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={List} />
          <Route exact path="/post/:id" component={ApartmentDetail} />
          {/* <Route exact path="/profile" component={} /> */}
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;