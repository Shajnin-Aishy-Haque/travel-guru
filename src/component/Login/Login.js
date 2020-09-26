import React, { useContext, useState } from 'react';
import './Login.css'
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, fbSignIn, GoogleSignIn, initializeLoginFramework, signInWithEmailAndPassword, signOut } from './LoginManagement';
import { useForm } from 'react-hook-form';
import { Input } from '@material-ui/core';
import google from '../../Icon/google.png';
import fb from '../../Icon/fb.png';



const Login = () => {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] = useState(true);
    const [loggedInUser, setLoggedInUser, selectedPlace, setSelectedPlace] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        photo: '',
        email: '',
        password: '',
        error: '',
        success: false

    })
    initializeLoginFramework();

    const handleGoogleSignIn = () => {
        GoogleSignIn()
            .then(res => {
                setUser(res)
                setLoggedInUser(res)
                history.replace(from);
            })
    }

    const handleSignOut = () => {
        signOut()
            .then(res => {
                setUser(res);
                setLoggedInUser(res)
            })
    }

    const handleFbSignIn = () => {
        fbSignIn()
            .then(res => {
                setUser(res)
                setLoggedInUser(res)
                history.replace(from);
            })
    }

    let fullname="";
    const handleOnBlur = (e) => {
        //console.log(e.target.value)
        let isFormValid;
        if (e.target.name === "email") {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === "password") {
            isFormValid = e.target.value.length > 8 && /\d{1}/.test(e.target.value)
            //console.log(isFormValid)
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)

        }
        if (newUser && e.target.name === "first-name") {
           fullname=fullname+e.target.value;
           console.log(e.target.value)
        }
      if(newUser && e.target.name === "last-name") {
        fullname=fullname+" "+e.target.value;
        const newUserInfo = { ...user };
        newUserInfo.name= fullname;
        setUser(newUserInfo)}
        console.log(fullname)

    }

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.email, user.password, user.name)
                .then(res => {
                    setUser(res)
                    setLoggedInUser(res)
                    history.replace(from);
                })


        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    setUser(res)
                    setLoggedInUser(res)
                    history.replace(from);

                })


        }

        e.preventDefault();

    }
 const style={
     backgroundColor:"white",
     border:"1px solid black",
     borderRadius:"30px",
     display:"block",
     width: "400px",
    height: "50px",
    marginBottom:"15px"
     
 }

const iconStyle={
    width:"30px",
    height:"30px",
    marginLeft:"2px"
}
const checkboxStyle={
    
        margin:"0"
      
    
    
}


    return (
        <div className="login" >
 
            {!newUser ?
                <div className="loginForm">
                    <h4>Login</h4>

                    <form onSubmit={handleSubmit}>
                    <input  type="text" name="email" onBlur={handleOnBlur} placeholder="enter your email" required></input>
                        <br />
                        <input type="password" name="password" onBlur={handleOnBlur} placeholder="enter password" required></input>
                        <br />
                        
                  
                  <Link style={{margin:"15px"}}>Forgot password</Link>
 
                        <input className="submit" type="submit" value=" Login" ></input>
                        <p>Don't have an account? <span onClick={() => setNewUser(true)}><u>Create an account</u></span></p>

                        </form>

                </div> :
                <div className="CreateAccount">
                    <h4>Create an account</h4>
                    <form onSubmit={handleSubmit}>
                        <input className="input" onBlur={handleOnBlur} name="first-name" placeholder="First name" required></input>
                        <br />
                        <input onBlur={handleOnBlur} name="last-name" placeholder="Last name" required></input>
                        <br />
                        <input type="text" name="email" onBlur={handleOnBlur} placeholder="enter your email" required></input>
                        <br />
                        <input type="password" name="password" onBlur={handleOnBlur} placeholder="enter password" required></input>
                        <br />
                        <input type="password" name="confirm-password" onBlur={handleOnBlur} placeholder="confirm password" required></input>
                        <br />
                        <input className="submit" type="submit" value="Create account" ></input>
                        <p>Already have an account? <span onClick={() => setNewUser(false)}><u>Login</u></span></p>


                    </form>

                </div>
            }

            <div className="loginWithOthers">
              <h5>or</h5>

                <button onClick={handleGoogleSignIn} style={style} ><img style={iconStyle} src={google} alt=""/> Continue with Google</button>
               
                <button onClick={handleFbSignIn} style={style}><img style={iconStyle} src={fb} alt=""/> Continue with Facebook</button>
            </div>

            {/* <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                <label htmlFor="newUser">New user sign up</label>
                <form onSubmit={handleSubmit}>
                    {newUser && <input onBlur={handleOnBlur} name="name" placeholder="your name"></input>}
                    <br />
                    <input type="text" name="email" onBlur={handleOnBlur} placeholder="enter your email" required></input> <br />
                    <input type="password" name="password" onBlur={handleOnBlur} placeholder="enter password" required></input> <br />
                    <input type="submit" value="submit" ></input>
                </form>

                <button onClick={handleGoogleSignIn}>Sign In</button>
                <button onClick={handleSignOut}>Sign out</button> <br />
                <button onClick={handleFbSignIn}>Login with facebook</button>

                {user.error && <p style={{ color: "red" }}>{user.error}</p>}
                {user.success && <p style={{ color: "green" }}>User {newUser ? "created" : "logged in"}  successfully</p>}  */}



        </div>
    );
};

export default Login;