import { createContext, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value="vinod">{children}</AppContext.Provider>;
};

// Custom hook

const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext };
