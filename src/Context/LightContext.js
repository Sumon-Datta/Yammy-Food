import React, { createContext, useState } from 'react';

export const LightContext = createContext();



const LightProvider = ({children}) => {

    const [light, setLight] = useState(true)
    

    return (
        <LightContext.Provider value={{light, setLight}} >
            {children}
        </LightContext.Provider>
    );
};

export default LightProvider;