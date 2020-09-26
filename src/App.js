import React, { createContext, useState } from 'react';

import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { fakeData } from './component/Fakedata/FakeData';
import Destination from './component/Destination/Destination';
import Login from './component/Login/Login';
import Booking from './component/Booking/Booking';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import NotFound from './component/NotFound/NotFound';

export const UserContext = createContext();

function App() {

  const [selectedPlace, setSelectedPlace] = useState(fakeData[0]);
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, selectedPlace, setSelectedPlace]}>
      <Router>
        <Header></Header>

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/destination">
            <Destination></Destination>
          </Route>
          <PrivateRoute path="/booking">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
           <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
