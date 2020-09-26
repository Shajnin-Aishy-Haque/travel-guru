import React, { useContext } from 'react';
import { UserContext } from '../../App';
import "./Hotel.css"
const Hotels = (props) => {
    const [loggedInUser,setLoggedInUser,selectedPlace, setSelectedPlace] = useContext(UserContext);
const {photoUrl,service,capacity,rating,cost,cancel, hotelName}=props.hotel;
console.log(hotelName)
    return (
        <div style={{display:"flex",margin:"0 20px 20px 20px"}}>

            <img style={{width:"270px",height:"188px",borderRadius:"5px"}} src={photoUrl} alt=""/>
            <div style={{margin:"0 20px"}}>
    <h5>{hotelName}</h5>
    <p>{capacity}</p>
    <p>{service}</p>
<p>{cancel}</p>
<div style={{display:"flex"}}>
<p style={{width:"40px"}}>{rating}</p>
    <p style={{width:"110px",marginLeft:"60px"}}>${cost}/per Night</p>
   
</div>

    
    

            </div>
        </div>
    );
};

export default Hotels;