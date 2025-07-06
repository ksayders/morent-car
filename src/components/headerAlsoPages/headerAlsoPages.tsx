import {Box, Button, Typography} from "@mui/material";
import HeaderRight from "../mainPage/header/headerRight/HeaderRight.tsx";
import {useNavigate} from "react-router-dom";

type HeadingType = {
    caption: string;
}

function HeaderAlsoPages(props: HeadingType) {
    const navigateHome = useNavigate();
    const {caption} = props;

    const goToHome = () => {
        navigateHome('/')
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '40px 60px',
            alignItems: 'center',
            borderBottom: '2px solid #1b7297'
        }}>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Button sx={{fontSize: 32}} onClick={goToHome}>MORENT</Button>
            </Box>
            <Box>
                <Typography variant="h4" color="textSecondary">{caption}</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
            }}>
                <HeaderRight/>
            </Box>
        </Box>
    )
}

export default HeaderAlsoPages;