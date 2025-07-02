import {Box, Button, Card, CardContent, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from "react";
import Car from './icons/car.svg'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AdjustIcon from '@mui/icons-material/Adjust';
import PeopleIcon from '@mui/icons-material/People';

function CardItem() {
    const [favorite, setFavorite] = useState(false);

    const onFavorite = () => {
        setFavorite(prev => !prev);
    }

    return (
        <Card sx={{
            width: 304,
            border: '2px solid #1b7297',
            borderRadius: 3,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 20px #90A3BF',
                cursor: 'pointer',
            },
        }}>
            <CardContent sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: 388,
                p: '26px'
            }}>
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <Typography variant='body1' sx={{color: '#1A202C', fontSize: '20px'}}>Koenigsegg</Typography>
                        <Typography variant='body2' sx={{color: '#90A3BF', fontSize: '14px'}}>Sport</Typography>
                    </Box>
                    <Button sx={{color: favorite ? 'red' : 'black'}} onClick={onFavorite}><FavoriteIcon/></Button>
                </Box>
                <Box>
                    <img src={Car} alt="car"/>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    <LocalGasStationIcon sx={{color: '#90A3BF'}}/>
                    <Typography variant='body2' sx={{color: '#90A3BF', fontSize: '14px'}}>90L</Typography>
                    <AdjustIcon sx={{color: '#90A3BF'}}/>
                    <Typography variant='body2' sx={{color: '#90A3BF', fontSize: '14px'}}>Manual</Typography>
                    <PeopleIcon sx={{color: '#90A3BF'}}/>
                    <Typography variant='body2' sx={{color: '#90A3BF', fontSize: '14px'}}>2 people</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography variant='body1'>$99.00/day</Typography>
                    <Button variant='contained'>Rent Now</Button>
                </Box>
            </CardContent>
        </Card>
    )
}

export default CardItem;