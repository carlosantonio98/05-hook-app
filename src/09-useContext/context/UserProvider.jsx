import { useState } from 'react';
import { UserContext } from './UserContext'

/* const user = {
    id: '123',
    email: 'carlos.antonio_98@gmail.com',
    name: 'carlosantonio'
}; */

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    return (
        //<UserContext.Provider value={{ hola: 'Mundo', user: user }}>
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    );
}
