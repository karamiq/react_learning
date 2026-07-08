import type { PaletteOptions }
  from "@mui/material";
import { blue } from "@mui/material/colors";

// 2. Annotate the objects so TypeScript reads and validates the type
export const cyberpunkPalette: PaletteOptions = {
  primary: { main: '#00ff66' },
  secondary: { main: '#ff0055' },
  background: { default: '#120136', paper: '#1a0845' },
}
  ;
export const oceanPalette: PaletteOptions = {
  primary: { main: blue[700] },
  secondary: { main: '#00a8cc' },
  background: { default: '#f0f8ff', paper: '#ffffff' },
}
  ;