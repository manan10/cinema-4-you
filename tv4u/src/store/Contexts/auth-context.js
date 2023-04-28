import React, { useEffect, useState } from "react"

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogIn: () => {},
    onLogout: () => {},
})

export const AuthContextProvider = (props) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState()

    useEffect(() => {
        const isUserLoggedIn = localStorage.getItem('isLoggedIn')
        if (isUserLoggedIn === '1') {
            setIsLoggedIn(true)
        } 
    }, [])

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
    }
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false) 
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogIn: loginHandler,
            onLogout: logoutHandler
        }}>
            { props.children }
        </AuthContext.Provider>
    )
}

export default AuthContext
