import { createContext, useContext, useState } from "react";

const defaultValue = {
    color: 'white',
    backgroundColor: "black"
}
const ThemeContext = createContext(defaultValue)

const ThemeProvider = ({ children }) => {
    const [modal, setModal] = useState(false);
    const [modalData, setmodalData] = useState({});
    const [theme, setTheme] = useState('dark')
    const ThemeToogle = () => {
        setTheme(theme => theme === 'light' ? 'dark' : "light")
    }
    const NavStyle = ({ isActive }) => ({
        fontFamily: isActive ? 'Vollkorn , cursive' : "",
        color: isActive ? "green" : "",
        borderBottom: isActive ? "1px solid blue" : "",
        width: isActive ? "100%" : "100%",
        fontStyle: isActive ? 'italic' : 'normal'

    })
    // *********************************Toast View************
    const [toast, setToast] = useState('')
    const [showToast, setShowToast] = useState(false)

    const ShowToast = (child) => {
        setShowToast(true)
        setToast(child)
        setTimeout(() => {
            setShowToast(false)
            setToast('')
        }, 2000);
    }

    return <ThemeContext.Provider value={{
        theme, ThemeToogle, NavStyle, toast, showToast, ShowToast, modalData, setmodalData, modal, setModal
    }}>{children} </ThemeContext.Provider>
}

const useTheme = () => useContext(ThemeContext)

export { useTheme, ThemeProvider }