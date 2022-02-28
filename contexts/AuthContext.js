import { createContext, useEffect, useState } from "react";
import { fetchUser, loginUser, signUpUser } from "../adapter/authAdapter";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [fetching, setFetching] = useState(false);
    const authenticated = token !== null;

    const logout = () => {
        setUser(null);
        setToken(null);
    };

    useEffect(() => {
        if (token) {
            fetchUser(token).then(user => {
                setUser(user);
            })
        }
    }, [token])

    const login = (user) => {
        setFetching(true);
        loginUser(user).then(result => {
            setFetching(false);
            setToken(result.token);
        }).catch(error => {
            setFetching(false);
            alert(error.message);
        })
    };

    const signUp = (data) => {
        setFetching(true);
        signUpUser(data).then(result => {
            setFetching(false);
            setToken(result.token);
        }).catch(error => {
            setFetching(false);
            alert(error);
        })
    }

    return <AuthContext.Provider value={{ authenticated, fetching, setFetching, user, logout, login, signUp, token }}>{children}</AuthContext.Provider>
}