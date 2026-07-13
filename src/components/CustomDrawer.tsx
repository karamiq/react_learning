import { Drawer, IconButton } from "@mui/material"
import Sidebar from "./sidebar"
import { useState } from "react"
import { MenuOpen } from "@mui/icons-material";

export const CustomDrawer = () => {
    const [isOpen, setIsOpen] = useState(true);

    return <>
        <IconButton size="large" onClick={() => setIsOpen(!isOpen)} sx={{ position: "absolute", top: 10, left: 10, zIndex: 1300 }}>
            <MenuOpen />
        </IconButton>

        <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)} variant="persistent">
            <Sidebar />

        </Drawer>
    </>
}