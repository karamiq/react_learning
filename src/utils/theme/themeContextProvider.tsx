import { CssBaseline, createTheme, useMediaQuery, type Theme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React, { useContext, useEffect, type FC, type PropsWithChildren } from "react";
import { CustomTheme } from "./theme";

type ThemeContextType = {
    mode: 'light' | 'dark' | 'system';
    toggleColorMode: () => void;
    theme: Theme;
};

export const ThemeContext = React.createContext<ThemeContextType>({
    mode: 'light',
    toggleColorMode: () => { },
    theme: createTheme(),
});


export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [mode, setMode] = React.useState<'light' | 'dark' | 'system'>(() => {
        const storedMode = localStorage.getItem('themeMode') as 'light' | 'dark' | 'system' | null;
        if (storedMode)
            return storedMode;
        return 'light';
    })

    const systemMode = useMediaQuery('(prefers-color-scheme: dark)');

    const modifiedTheme = React.useMemo(() => {
        const actualMode = mode === 'system' ? (systemMode ? 'dark' : 'light') : mode;
        localStorage.setItem('themeMode', actualMode);
        return CustomTheme(actualMode, 'default');


    }, [mode, systemMode]);

    const toggleColorMode = () => {
        setMode((prevMode) => {
            let newMode: any;
            switch (prevMode) {
                case 'light':
                    newMode = 'dark';
                    break;
                case 'dark':
                    newMode = 'light';
                    break;
                case 'system':
                    newMode = systemMode ? 'light' : 'dark';
                    break;
                default:
                    newMode = 'light';
            }
            localStorage.setItem('themeMode', newMode);
            return newMode;
        });

    };

    return (
        <ThemeContext.Provider value={{ mode, toggleColorMode, theme: modifiedTheme }}>
            <ThemeProvider theme={modifiedTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};


export const useThemeContext = () => {
    return useContext(ThemeContext);
}