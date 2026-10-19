import {
    Container,
    Button,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

export default function Login() {

    // A helper boolean to track if the menu should be visible
    return (

        <Container sx={{ color: 'blue', width: "100%" }}>

        </Container>
    );
}
export const ThemeMenu = () => {
    // 1. Manage the anchor element state
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    // A helper boolean to track if the menu should be visible
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget); // Anchor the menu to this specific button
    };

    const handleClose = (modeValue?: string) => {
        setAnchorEl(null); // Close the menu
        if (modeValue) {
            console.log("Selected Mode:", modeValue);
            // Connect your theme context state setter right here!
        }
    };

    return (
        <>
            {/* 2. Create the Trigger Button */}
            <Button variant="contained" onClick={handleClick}>
                Choose Mode
            </Button>

            {/* 3. The Corrected Menu Setup */}
            <Menu
                id="theme-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
            >
                <MenuItem onClick={() => handleClose("light")}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                        <LightModeIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Light" />
                </MenuItem>

                <MenuItem onClick={() => handleClose("dark")}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                        <DarkModeIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Dark" />
                </MenuItem>

                <MenuItem onClick={() => handleClose("system")}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                        <SettingsBrightnessIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="System Default" />
                </MenuItem>
            </Menu>
        </>
    );
};