import { Paper, Typography } from "@mui/material"

function Home() {
    return (
        <Paper className="hero-card" elevation={0}>
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome to the DRP Demo
            </Typography>
            <Typography variant="body1">
                This is a simple demo application built with React and Material-UI.
            </Typography>
        </Paper>
    )
}

export default Home