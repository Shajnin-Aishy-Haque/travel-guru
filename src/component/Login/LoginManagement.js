
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.Config";

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) { firebase.initializeApp(firebaseConfig); }

}

export const GoogleSignIn = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const
                token = result.credential.accessToken;
            const
                user = result.user;
            const { displayName, email, photoURL } = result.user;
            const signedUser = {
                isSignedIn: true,
                name: displayName,
                photo: photoURL,
                email: email,
                success: true
            }
            return signedUser;
           // console.log(result)
        })
        .catch(error => {
            console.log(error.massege);
        })

}


export const fbSignIn = () => {

    const fbProvider = new firebase.auth.FacebookAuthProvider();

    return firebase.auth().signInWithPopup(fbProvider)
        .then((result) => {
            const token = result.credential.accessToken;
            const user = result.user;
            const { displayName, email, photoURL } = result.user;
            const signedUser = {
                isSignedIn: true,
                name: displayName,
                photo: photoURL,
                email: email,
                success: true
            }
            return signedUser;

            //   console.log(user)
        }).catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;

        });
}

export const signOut = () => {
    //  console.log("signOut clicked")
    return firebase.auth().signOut()
        .then(res => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                photo: '',
                email: '',
                password: '',
                success: false
            }
            //  console.log(res)
            return signedOutUser;

        })

        .catch(function (error) {

            const newUserInfo = {};
            newUserInfo.error = error.errorMessage;
            newUserInfo.success = false
            return newUserInfo;
        });

}

export const createUserWithEmailAndPassword = (email, password, name) => {

    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = "";
            newUserInfo.success = true;
            updateUserName(name);
            return newUserInfo;

        })

        .catch((error) => {
            const errorMessage = error.message;
            const newUserInfo = {};
            newUserInfo.error = errorMessage;
            newUserInfo.success = false
            return newUserInfo;

        });


}

export const signInWithEmailAndPassword = (email, password) => {

    return firebase.auth().signInWithEmailAndPassword(email, password)

        .then(res => {
            const { displayName } = res.user
            const newUserInfo = res.user;

            newUserInfo.error = "";
            newUserInfo.success = true;
            newUserInfo.name = displayName;

            return newUserInfo;

        })

        .catch((error) => {
            const errorMessage = error.message;
            const newUserInfo = {};
            newUserInfo.error = errorMessage;
            newUserInfo.success = false;
            return (newUserInfo)
        });


}

const updateUserName = (name) => {

    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name,

    }).then(function () {
        console.log("name update")

    }).catch(function (error) {
        console.log(error)

    });

}