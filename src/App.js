import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NotFound from './component/NotFound/NotFound';
import ApartmentDetail from './pages/ApartmentDetail';
import Error from './pages/Error';
import Home from './pages/Home';
import List from './pages/List';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={List} />
          <Route exact path="/posts/:id" component={ApartmentDetail} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/upload" component={Profile} />
          <Route exact path="/my_posts" component={Profile} />
          <Route exact path="/favorite" component={Profile} />
          <Route component={Error}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;