import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "./firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then ( res => {
            console.log(res.user);
            setUser(res.user)
        })
        .catch(err=> {
            console.log(err);
        })
    }

    const authInfo = {
        loading,
        user,
        login,
        register,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;