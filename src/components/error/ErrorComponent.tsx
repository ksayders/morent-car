import {Box, Typography} from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

function ErrorComponent() {
    return (
        <Box sx={{
            height: "80vh",
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