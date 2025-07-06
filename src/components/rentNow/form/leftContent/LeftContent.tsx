import {Box, Button, Typography} from "@mui/material";
import InputInfo from "../userInfoStep/inputInfo/inputInfo";

function LeftContent() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 60px',
            width: '57%'
        }}>
            <Typography variant="h4">Billing Info</Typography>
            <Typography variant="h6" sx={{color: '#90A3BF'}}>Please enter your billing info</Typography>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '30px',
                p: '50px 0',
                justifyContent: 'space-between',
            }}>
                <InputInfo caption='Name' label='Your name'/>
                <InputInfo caption='Address' label='Address'/>
                <InputInfo caption='Phone Number' label='Phone number'/>
                <InputInfo caption='Town / City' label='Town or city'/>
            </Box>
            <Button variant='contained' sx={{width: '200px'}}>Rent now</Button>
        </Box>
    )
}

export default LeftContent;