import { createContext, useContext, useState } from "react";

const LocalizeContext = createContext()

const LocalizeProvider = ({ children }) => {

    const [language, setLanguage] = useState('english')
    return <LocalizeContext.Provider value={{ language, setLanguage }}>{children}</LocalizeContext.Provider>
}

const useLocalize = () => useContext(LocalizeContext)

export { LocalizeProvider, useLocalize }