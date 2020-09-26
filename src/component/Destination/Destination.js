import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './Destination.css'

const Destination = () => {
    const [loggedInUser,setLoggedInUser,selectedPlace, setSelectedPlace] = useContext(UserContext);
    const history=useHistory();

    const handleBooking=()=>{
        history.push("/booking");
   
    }
    const style = {
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),
         url(${selectedPlace.image})`,
        height: "100vh",
        width: "100%",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        border: "1px solid black",
        display: "flex"
    }

    return (
        <div className="destination" style={style}>

            <div className="description  col-md-6">
                <h1>{selectedPlace.name}</h1>
                <p>{selectedPlace.detail}</p>
            </div>

            <div className="setPlan  col-md-6">
                <div className="plan-form">
                    <p>Origin </p>
                    <input type="text" value="Dhaka"></input>

                    <p>Destination</p>
                    <input type="text" value={selectedPlace.name}></input>
                    <div className="date">
                       <div>
                       <p>From</p>
                        <input style={{marginRight:"8px"}} type="date"></input>
                       </div>
                        <div>
                        <p>to</p>                      
                        <input style={{marginLeft:"5px"}}  type="date" ></input>
                        </div>
                    </div>
                    <button onClick={handleBooking} >Start Booking</button>
                </div>
            </div>
        </div>
    );
};

export default Destination;