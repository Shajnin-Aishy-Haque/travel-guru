import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { fakeData } from '../Fakedata/FakeData';
import './PlaceCard.css'
const PlaceCard = (props) => {
    const {name,cardImage}=props.place;
    const [loggedInUser,setLoggedInUser,selectedPlace, setSelectedPlace]=useContext(UserContext);
    
  const cardStyle={
    width: "250px",
    height: "385px",
    borderRadius:" 20px",
    backgroundImage:`url(${cardImage})`,
    marginRight:"35px",
    boxShadow:"0 20 50px rgba(14, 13, 1, 0.5)",
    border:"",
    
  }

const handleSelectCard=()=>{
setSelectedPlace(props.place);
}
  cardStyle.border=(selectedPlace.name===name)?"3px solid #F9A51A":"";
    return (
        <div onClick={handleSelectCard} className="card" style={cardStyle}>
           <h3>{name}</h3>
        </div>
    );
};

export default PlaceCard;