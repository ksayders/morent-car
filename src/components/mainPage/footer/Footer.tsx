import {Box, Typography} from '@mui/material';

function Footer() {
    return (
        <Box sx={{
            mt: '64px',
            borderTop: '2px solid #1b7297',
            display: 'flex',
            justifyContent: 'space-between',
            p: '32px 220px'
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: 292}}>
                <Typography variant="h2" sx={{ fontSize: 32, color: '#3563E9' }}>
                    MORENT
                </Typography>
                <Typography variant='body2' sx={{ fontSize: 16, color: '#0164AA', pt: '10px'}}>
                    Our vision is to provide convenience and help increase your sales business.
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer;