import React, { useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../../Icon/Logo.png'
import { Link } from '@material-ui/core';
import "./Header.css"
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';
const Header = () => {

  const [loggedInUser,setLoggedInUser,selectedPlace, setSelectedPlace]=useContext(UserContext);
const history=useHistory()

const handleHistory=(path)=>{
  history.push(path)
}
  const linkStyle = {
    color: "white",
    textDecoration: "none",

  }

  return (
    <div className="header" >

      <img src={Logo} alt="" />
      <div style={{ position: "relative" }}  >
        <SearchIcon className="searchIcon"></SearchIcon>
        <input className="searchBar" value="search your destination...">
        </input>

      </div>
      <nav >

        <ul>
          <li>  <Link style={linkStyle} to="/news">News</Link></li>
          <li><Link style={linkStyle} to="/destination">Destination</Link></li>
          <li><Link style={linkStyle} to="/blog">Blog</Link></li>
          <li> <Link style={linkStyle} to="/contact"> Contact</Link></li>
        <li>  {loggedInUser.name?<button  onClick={()=>{ setLoggedInUser({})}} >Log Out </button>:<button onClick={()=>handleHistory("/login")} >Login </button>} </li>
        </ul>
      </nav>

    </div>
  );
};

export default Header;