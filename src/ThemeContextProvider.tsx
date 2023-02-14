import React, { PropsWithChildren, useState } from 'react'

export const ThemeContext = React.createContext<ThemeContextValue>({ darkMode: false } as ThemeContextValue);

export interface ThemeContextValue {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

const ThemeContextProvider = ({ children }: PropsWithChildren) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;