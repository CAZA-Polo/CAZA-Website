import { GlobalContext } from './GlobalContext';
import { useState } from 'react';

const GlobalProvider = ({ children }) => {

    // Cookie Consent
    const [showCookiePop,setShowCookiePop] = useState(true);
    const [agree,setAgree] = useState(true);
    const cookieUserResponse = window.localStorage.getItem('CAZACookieConsent');

    return (
        <GlobalContext.Provider value={{ 
            cookieAgree: { agree,setAgree },
            cookiePop: { showCookiePop,setShowCookiePop },
            cookieUserResponse
         }}>
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;