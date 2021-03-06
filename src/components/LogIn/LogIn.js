import React from 'react';
import { useState } from 'react';
import './LogIn.css'
import * as firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { CategoryContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';



const LogIn = () => {

    const [loggedInUser, setLoggedInUser] = useContext(CategoryContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = ()=>{
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch(function(error) {
            const newUserInfo = {...user}
            newUserInfo.error = error.message;
            setUser(newUserInfo);
          });
    }
    
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const handleFacebookSignIn = () =>{
        firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch(function(error) {
            const newUserInfo = {...user}
            newUserInfo.error = error.message;
            setUser(newUserInfo);
          });    
    }


    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        email: '',
        password: '',
        error: ''
    })
    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 3;
            const isPasswordHasNumber = /\d{1}/.test(e.target.value)
            isFormValid = isPasswordValid && isPasswordHasNumber;
        }
        if (isFormValid) {
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit =(e)=>{
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res=>{
                const newUserInfo = {...user}
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
            })
            .catch(function(error) {
                const newUserInfo = {...user}
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
              });
        }
        e.preventDefault();

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res=>{
                const newUserInfo = {...user}
                newUserInfo.error = '';
                setUser(newUserInfo);

                const {displayName, email} = user;
                const signedInUser = {name: displayName, email}
                setLoggedInUser(signedInUser);
                history.replace(from);


            })
            .catch(function(error) {
                const newUserInfo = {...user}
                newUserInfo.error = error.message;
                setUser(newUserInfo);
              }); 
        }

    }
    return (
        <div className='logIn'>
            
            <form onSubmit={handleSubmit} action="">
                <h2 className='m-2'>Login</h2>
                <input className='m-2' onBlur={handleBlur} name='email' type="email" placeholder='Username or Email' required/><br/>
                <input className='m-2' onBlur={handleBlur} name='password' type="password" placeholder='Password' required/><br/>
                <input className='m-2' type="checkbox"></input>
                <label> <small className='mr-4'>Remember Me</small><small className='text-warning'>Forgotten Password</small></label>
                <input type="submit" value={newUser ? 'Sign Up' : 'Login'} className='px-5 py-1 m-2 bg-warning submitButton' variant="warning"/><br/>
                <small className='mx-2'>{newUser ? 'Already have an account' : "Don't have an account"}?</small><small style={{cursor: 'pointer'}} className='text-warning' onClick={()=>setNewUser(!newUser)}>{newUser ? 'Log in' : 'Create an account'}</small>
            </form>

            <p className='text-danger mt-5'>{user.error}</p>
            {user.success && <p className='text-success mt-3'>User {newUser ? 'created' : 'Logged In'} Successfully.</p>}<br/>
            
            <Button className='px-5 my-4' onClick={handleGoogleSignIn} variant='warning'>google</Button><br/>
            <Button className='px-5' onClick={handleFacebookSignIn} variant='warning'>Facebook</Button>
            
        </div>
    );
};

export default LogIn;