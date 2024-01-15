import axios from 'axios';
import { createContext, useContext, useEffect } from 'react';

const AppContext = createContext();

const callAPI = 'https://6556cd15bd4bcef8b611a0fc.mockapi.io/api/clothes/clothes';

const AppProvider = ({ children }) => {
    const getProducts = async (url) => {
        const res = await axios.get(url);

        console.log(res.data);
    };

    useEffect(() => {
        getProducts(callAPI);
    }, []);

    return <AppContext.Provider value="vinod">{children}</AppContext.Provider>;
};

// Custom hook

const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext };
