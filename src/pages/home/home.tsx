import { Box, Stack, Paper, Typography } from "@mui/material";
import { CustomDrawer } from "../../components/CustomDrawer";
function Home() {
    return (
        <Stack direction="column">
            {/* Top */}
            <Box>
                <Paper>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Welcome to the DRP Demo
                    </Typography>
                    <Typography variant="body1">
                        This is a simple demo application built with React and Material-UI.
                    </Typography>
                </Paper>

            </Box>
            <Box
                sx={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
                {/* Sidebar */}
                <Box sx={{ color: "blue", flex: 1, backgroundColor: "lightgray" }}>
                    <CustomDrawer />
                </Box>

                {/* Main Content Area */}
                <Box sx={{ color: "blue", flex: 4, backgroundColor: "lightgray" }}>
                    lfsdkjfdlkj
                </Box>
            </Box >
        </Stack>
    );
}

export default Home;