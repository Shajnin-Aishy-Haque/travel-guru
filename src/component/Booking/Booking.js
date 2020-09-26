import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { fakeData } from '../Fakedata/FakeData';
import Hotels from '../Hotels/Hotels';
import "./Booking.css"
const Booking = () => {
    const [loggedInUser,setLoggedInUser,selectedPlace, setSelectedPlace]=useContext(UserContext);
    const hotels=selectedPlace.hotels;
    return (
        <div className="booking">
        <div className="col-md-6 hotels">
    <h3>{selectedPlace.name}</h3>
{
     hotels.map(hotel=><Hotels hotel={hotel}></Hotels>)
}
        </div>
        <div className="col-md-6 map">
       
        </div>
        
     </div>
    );
};

export default Booking;




