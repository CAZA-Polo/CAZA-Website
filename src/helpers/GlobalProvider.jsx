import { GlobalContext } from './GlobalContext';
import { useState } from 'react';

const GlobalProvider = ({ children }) => {

    // Cookie Consent
    const [agree,setAgree] = useState(true);

    return (
        <GlobalContext.Provider value={{ 
            cookieAgree: {
                agree,
                setAgree
            }
         }}>
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;