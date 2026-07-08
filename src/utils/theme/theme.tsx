import { createTheme } from "@mui/material";
import type { PaletteOptions } from "@mui/material";
import { amber, blue, green, deepPurple } from "@mui/material/colors";
import { cyberpunkPalette, oceanPalette } from "./themesPalettes";

export type ThemeModes = 'light' | 'dark';
type AvailableThemes = 'default' | 'ocean' | 'cyberpunk';

export const CustomTheme = (mode: ThemeModes, theme: AvailableThemes | null) => {
    let selectedPalette: PaletteOptions = {
        mode: mode,
    };

    switch (theme) {
        case 'ocean':
            selectedPalette = oceanPalette;
            break;
        case 'cyberpunk':
            selectedPalette = cyberpunkPalette;
            break;
        default:
            selectedPalette = {
                mode: mode,
                primary: { main: blue[500] },
                secondary: { main: green[500] },
                background: { default: mode === 'light' ? '#ffffff' : '#121212', paper: mode === 'light' ? '#f5f5f5' : '#1e1e1e' },
            }
            break;
    }
    return createTheme({
        palette: selectedPalette,
    });
}

