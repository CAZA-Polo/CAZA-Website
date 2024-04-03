import { GlobalContext } from './GlobalContext';
import { useState } from 'react';

const GlobalProvider = ({ children }) => {

    // Cookie Consent
    const [agree,setAgree] = useState(true);
    const cookieUserResponse = window.localStorage.getItem('CAZACookieConsent');

    return (
        <GlobalContext.Provider value={{ 
            cookieAgree: { agree,setAgree },
            cookieUserResponse
         }}>
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;