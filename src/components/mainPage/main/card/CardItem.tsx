import {Box, Button, Card, CardContent, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from "react";
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AdjustIcon from '@mui/icons-material/Adjust';
import PeopleIcon from '@mui/icons-material/People';
import type {CardType} from "./types/card-types.ts";

function CardItem({name, info, fuel, type, people, imageUrl, price}: CardType) {
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
                        <Typography variant='body1' sx={{color: '#1A202C', fontSize: '20px'}}>{name}</Typography>
                        <Typography variant='body2' sx={{color: '#90A3BF', fontSize: '14px'}}>{info}</Typography>
                    </Box>
                    <Button sx={{color: favorite ? 'red' : 'black'}} onClick={onFavorite}><FavoriteIcon/></Button>
                </Box>
                <Box
                    sx={{
                        boxShadow: '0 5px 1px #90A3BF',
                        borderRadius: '20px',
                        overflow: 'hidden',
                    }}
                >
                    <img
                        src={imageUrl}
                        alt={name}
                        style={{
                            width: '100%',
                            display: 'block',
                        }}
                    />
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    <LocalGasStationIcon sx={{color: '#90A3BF'}}/>
                    <Typography variant='body2' sx={{color: '#90A3BF', fontSize: '14px'}}>{fuel}</Typography>
                    <AdjustIcon sx={{color: '#90A3BF'}}/>
                    <Typography variant='body2' sx={{color: '#90A3BF', fontSize: '14px'}}>{type}</Typography>
                    <PeopleIcon sx={{color: '#90A3BF'}}/>
                    <Typography variant='body2' sx={{color: '#90A3BF', fontSize: '14px'}}>{people}</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography variant='body1'>${price}/day</Typography>
                    <Button variant='contained'>Rent Now</Button>
                </Box>
            </CardContent>
        </Card>
    )
}

export default CardItem;