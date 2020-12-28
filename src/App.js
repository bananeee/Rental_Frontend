import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NotFound from './component/NotFound/NotFound';
import ApartmentDetail from './pages/ApartmentDetail';
import Login from "./pages/Login";
import Home from './pages/Home';
import List from './pages/List';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Upload from './component/Profile/Upload/Upload';
import UserPost from './component/Profile/UserPost/UserPost';
import UserFavorite from './component/Profile/UserFavorite/UserFavorite';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={List} />
          <Route exact path="/posts/:id" component={ApartmentDetail} />
          <Route exact path="/host/login" component={Login} />
          <Route exact path="/renter/login" component={Login} />
          <Route exact path="/renter/register" component={Register} />
          <Route exact path="/host/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/upload/:id" component={Profile} />
          <Route exact path="/my_posts" component={Profile} />
          <Route exact path="/favorite" component={Profile} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;