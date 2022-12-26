import { UserContext } from './UserContext'

const user = {
    id: '123',
    email: 'carlos.antonio_98@gmail.com',
    name: 'carlosantonio'
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
        { children }
    </UserContext.Provider>
  );
}
