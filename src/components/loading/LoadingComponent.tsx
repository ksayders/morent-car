import {Box, CircularProgress, Typography} from '@mui/material'

function LoadingComponent() {
    return (
        <Box sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <CircularProgress/>
            <Typography variant='h3'>Loading...</Typography>
        </Box>
    )
}

export default LoadingComponent;