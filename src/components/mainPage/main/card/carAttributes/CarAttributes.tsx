import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import {Box, Typography} from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import PeopleIcon from "@mui/icons-material/People";

type AttributesType = {
    fuel: string;
    type: string;
    people: string;
}

function CarAttributes(props: AttributesType) {
    const {fuel, type, people} = props;
    return (
        <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <LocalGasStationIcon sx={{color: '#90A3BF'}}/>
            <Typography variant='body2' sx={{color: '#90A3BF', fontSize: '14px'}}>{fuel}</Typography>
            <AdjustIcon sx={{color: '#90A3BF'}}/>
            <Typography variant='body2' sx={{color: '#90A3BF', fontSize: '14px'}}>{type}</Typography>
            <PeopleIcon sx={{color: '#90A3BF'}}/>
            <Typography variant='body2' sx={{color: '#90A3BF', fontSize: '14px'}}>{people}</Typography>
        </Box>
    )
}

export default CarAttributes;