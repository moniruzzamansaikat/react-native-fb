import { createContext, useEffect, useState } from "react";
import { fetchAllUsers } from "../adapter/usersAdapter";
import { useAuth } from '../hooks/useAuth'

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const { token } = useAuth();

    useEffect(() => {
        if (token) {
            fetchAllUsers(token).then(result => {
                setUsers(result);
            })
        }
    }, [token])

    return <UsersContext.Provider value={{ users }}>
        {children}
    </UsersContext.Provider>
}

export default UsersProvider;