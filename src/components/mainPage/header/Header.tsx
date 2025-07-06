import {Box, Button} from "@mui/material";
import HeaderRight from "./headerRight/HeaderRight";
import HeaderSearch from "./headerSearch/HeaderSearch";
import type {HeaderPropsTypes} from "./types/headerTypes";

const Header = ({ onSearch }: HeaderPropsTypes) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '40px 60px',
            alignItems: 'center',
            borderBottom: '2px solid #1b7297'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button sx={{ fontSize: 32 }}>MORENT</Button>
                <Box sx={{ ml: '64px' }}>
                    <HeaderSearch onSearch={onSearch} />
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
            }}>
                <HeaderRight/>
            </Box>
        </Box>
    );
};

export default Header;