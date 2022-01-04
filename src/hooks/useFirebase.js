import initializeAuthentication from "../firebase/firebase.init";
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux'
import { isAdmin, login, logout, setLoading } from "../dataSlice/dataSlice";
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState(null);
  const dispatch = useDispatch();
  const auth = getAuth();

  const saveUser = data => {
    axios.post('http://localhost:5000/user', data)
  }
  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        setUser(result.user)
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        setAuthError(errorMessage)
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };


  const handleRegister = ({ email, password, name, navigate }) => {
    console.log(email, navigate);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = { email, displayName: name, photoURL: 'https://cdn.iconscout.com/icon/free/png-256/laptop-user-1-1179329.png' };
        saveUser(newUser);
        setUser(newUser);
        // send name to firebase after creation 
        navigate('/');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
  }
  const logInWithEmail = info => {
    const { email, password, location, navigate } = info;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        const url = location?.state?.from || '/';
        navigate(url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  useEffect(() => {
    dispatch(setLoading(true))
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // setUser(user);
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          createdAt: user.metadata.createdAt,
          photoURL: user.photoURL,
          uid: user.uid
        }))
        dispatch(isAdmin({ email: user.email }))
      }
      else {
        dispatch(setLoading(false))
      }

    });
  }, [auth]);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(logout())
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }

  return {
    googleSignIn,
    handleRegister,
    authError,
    handleSignOut,
    logInWithEmail,
  };
};

export default useFirebase;
