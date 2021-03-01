import React, {useState, useEffect, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import iPhoneProfile from  '../assets/images/iphone-with-profile.jpg'
import logoInsta from '../assets/images/logo.png'
import {FirebaseContext} from '../context/firebase';

export default function Login() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    /* 
        * Check to see is email is equal to an empty string
        * Check to see if password is equal to an empty string 
    */
    
    // eslint-disable-next-line 
    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === ''; 


    useEffect(() => {
        document.title = 'Login - Instagram';
    }, [])

    /*
        * user actions
        * happy & sad scenarios
        * what happens when a user clicks login? -> connect to firebase
        * a async function that can handle login
        * handle a succesful login with 
        * await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
    */
    const handleLogin = async (event) => {
        event.preventDefault();
    
        try {
            await firebase.auth().signInWithEmailAndPassword(emailAddress, password)
            history.push(ROUTES.DASHBOARD)

        } catch (error) {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        }
    }


    /*  
        * wrap the await function call to firebase in a try/catch
        * error: catch(error)
        * setError(error.message)

        * extra learnings: test.com
        * handle the email address validation client side
        * removes a network call!
    */ 

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src={iPhoneProfile} alt="iPhone with Instagram app" />
            </div>
            <div className="flex flex-col w-2/5">
                <div className="flex flex-col items-center bg-white p-4 border mb-4">
                    <h1 className="flex justify-center w-full">
                        <img src={logoInsta} alt="Instagram" className="mt-2 w-6/12 mb-4" />
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-500">{error}</p>}

                
                    <form onSubmit={handleLogin} method="POST">
                        <input
                            aria-label="Enter your email address"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            type="text"
                            placeholder="Email address"
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <input
                            aria-label="Enter your password"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            type="password"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`bg-blue-500 text-white w-full rounded h-8 font-bold 
                            ${ isInvalid && 'opacity-50'}`}
                            >
                            Log In
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                    <p className="text-sm">
                        Don't have an account?{' '}
                        <Link to={ROUTES.SIGN_UP} className="font-bold">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}