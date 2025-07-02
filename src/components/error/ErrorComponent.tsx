import {Box, Typography} from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

function ErrorComponent() {
    return (
        <Box sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <WarningIcon/>
            <Typography variant='h3' sx={{color: 'red'}}>Not found</Typography>
        </Box>
    )
}

export default ErrorComponent;