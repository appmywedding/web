import React, { useEffect, useContext, createContext } from 'react';
import { useSelector } from 'react-redux';
import firebaseClient from './firebase';


const AuthContext = createContext({})

export function FirebaseProvider({ children }) {
    const user = useSelector((reducers) => reducers.auth.user);

    useEffect(() => {
        firebaseClient();
    });

    return (<AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>)
}

export const useAuth = () => useContext(AuthContext)