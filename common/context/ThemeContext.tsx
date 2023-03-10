import React, { PropsWithChildren, useState } from "react";

export interface Theme {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>,
    prefersDarkTheme: (event?: boolean) => void,
}

export const ThemeContext = React.createContext<Theme | null>(null)

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [ theme, setTheme ] = useState('light');
    
    const prefersDarkTheme = (event?: boolean) => {
        const media = window.matchMedia("(prefers-color-scheme: dark)");

        if(media.matches || event) {
            document.documentElement.setAttribute("data-theme", "dark");
            setTheme('dark');
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            setTheme('light');
        }
    }

    return (
        <ThemeContext.Provider value={{theme, setTheme, prefersDarkTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}