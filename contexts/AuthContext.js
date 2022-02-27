import { createContext, useState } from "react";

export const AuthContext = createContext();

// mock login data
const mockUser = {
    email: 'secret@gmail.com',
    password: 'saikat123@'
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'saiakt' });

    const authenticated = user !== null;
    const logout = () => setUser(null);

    const login = (user) => {
        return new Promise((resolve, reject) => {
            if (user.email === mockUser.email && user.password === mockUser.password) {
                setUser(user);
                resolve();
            } else {
                reject('Invalid credentials');
            }
        })
    };

    return <AuthContext.Provider value={{ authenticated, user, logout, login }}>{children}</AuthContext.Provider>
}