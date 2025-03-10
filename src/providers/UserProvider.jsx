import { createContext, useState, useContext } from 'react';

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
    return (
        <AppContext.Provider value={{user, setUser}}>
            {children}
        </AppContext.Provider>
    );
}

export default UserProvider;