import React from 'react'
import { useSelector } from 'react-redux'

const ThemeProvider = ({ children }) => {

    const theme = useSelector((state) => state.theme.theme);

    return (
        <div className={`${theme}`}>
            {children}
        </div>
    )
}

export default ThemeProvider
