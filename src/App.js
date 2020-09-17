import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import NotFound from './components/NotFound/NotFound';
import { createContext } from 'react';
import LogIn from './components/LogIn/LogIn';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import HotelDeatail from './components/HotelDeatail/HotelDeatail';


export const CategoryContext = createContext();

export const information =[
  {name: "COX’S BAZAR", img: 'https://i.ibb.co/FbHqTPQ/coxsbazar.png',  detail: 'Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts', id: 'HGFK'},
  {name: "SREEMONGOL", img: 'https://i.ibb.co/bNN5ffv/Sreemongol.png',  detail: 'Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. Its natural scenery is very charming. It soothes one’s eyes. Birds are twittering always here.', id: 'SDFG'},
  {name: "SUNDARBAN", img: 'https://i.ibb.co/Y7bYXqN/sundorbon.png',  detail: 'The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India state of West Bengal to the Baleswar River in Bangladesh.', id: 'PRAS'}
]

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

  <CategoryContext.Provider value={[loggedInUser, setLoggedInUser, information]} >
  <Router>
    <Switch>
      <Route path='/home'>
        <Home></Home>
      </Route>
      <Route path='/booking/:bookingId'>
        <Booking></Booking>
      </Route>
      <Route path='/login'>
        <LogIn></LogIn>
      </Route>
      <PrivateRoute path='/hotel'>
        <HotelDeatail></HotelDeatail>
      </PrivateRoute>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route path='*'>
        <NotFound></NotFound>
      </Route>
    </Switch>
  </Router>
  </CategoryContext.Provider>  
      
    
  );
}

export default App;
