import { createContext, useState } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({children}){
    const [theme, setTheme] = useState(true);

    const changeTheme = () => {
        setTheme((prevState) => !prevState)
    }
    return(
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}