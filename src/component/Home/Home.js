import React, { useContext, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { fakeData } from '../Fakedata/FakeData';
import './Home.css'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import PlaceCard from '../PlaceCard/PlaceCard';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';


const Home = () => {
    const [index, setIndex] = useState(0);
    const [loggedInUser,setLoggedInUser,selectedPlace, setSelectedPlace]=useContext(UserContext);
console.log(selectedPlace.name)
// let count=0
// const slideChange=()=>{setInterval(()=>{
//     setSelectedPlace(fakeData[count]);
//     console.log(count)
//     count=(count+1)%3;
// //setSelectedPlace(fakeData[index]);

 
// },2000)}

// slideChange();
// clearInterval(slideChange);



    const style = {
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),
         url(${selectedPlace.image})`
    }
 

    
    return (

        <div className="home" style={style} >


            <div className="description-container col-md-5">

                <h1>{selectedPlace.name}</h1>
                <p>{selectedPlace.readMore}</p>
              <Link to="/destination"> <button className="booking-button" > Booking <ArrowRightAltIcon></ArrowRightAltIcon></button></Link>

            </div>

            <div className="card-container col-md-7">
                {
                   fakeData.map( place => <PlaceCard place={place}> </PlaceCard>)
                  
                }
                
            </div>
        </div>





    );
};

export default Home;