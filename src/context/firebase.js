
import React, {useState, useEffect} from 'react'; 
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const context = React.createContext()
const { Provider } = context

function ContextProvider(props) {
  const [isLoading, setIsLoading] = useState(true)

  const firebase = window.firebase
  const { FieldValue } = window.firebase.firestore;

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyBMGC0oITHkMuH7zsGJnvyuH9ADITkc-ks",
      authDomain: "react-instagram-clone-26601.firebaseapp.com",
      projectId: "react-instagram-clone-26601",
      storageBucket: "react-instagram-clone-26601.appspot.com",
      messagingSenderId: "490408003054",
      appId: "1:490408003054:web:3d8d03f87698967558faff",
      measurementId: "G-RHVFYCDW8C"
    };
    console.log("Log")
    // Initialize Firebase
    setIsLoading(false)
    console.log("Loaded  Data")
    console.log(firebaseConfig)

    firebase.initializeApp(firebaseConfig);
    console.log(firebaseConfig)

    firebase.analytics();
    // eslint-disable-next-line 
  }, [])

  return (
    <Provider value={{ firebase, FieldValue }} >
      {isLoading ? null : props.children}
    </Provider>
  )
}

export { context as FirebaseContext, ContextProvider as FirebaseContextProvider }