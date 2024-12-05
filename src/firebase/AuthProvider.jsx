import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";
import swal from 'sweetalert';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    },[])

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        photoURL: photo,
        })
    }

    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then ( res => {
            console.log(res.user);
            swal("You have successfully log in")
        })
        .catch(err=> {
            console.log(err);
        })
    }

    const logout = () => {
        signOut(auth)
        .then(res => {
            console.log(res);
            swal("sign out successfull")
        })
        .catch(err=> {
            console.log(err);
        })
    }

    const authInfo = {
        loading,
        user,
        login,
        logout,
        register,
        googleLogin,
        profileUpdate
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;