import {Box, Button, Card, CardContent, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import type {CardType} from "./types/card-types";
import {useEffect, useState} from "react";
import {useGetFavoriteCarsQuery, useAddFavoriteMutation, useDeleteFavoriteMutation} from "../../../../store/carFavoriteApi/carApiFavorites";
import CarAttributes from "./carAttributes/CarAttributes.tsx";
import CarImage from "./carImage/CarImage.tsx";
import {useNavigate} from "react-router-dom";
import {setSelectedCar} from "../../../../store/selectedCarSlice/selectedCarSlice";
import {useDispatch} from "react-redux";

function CardItem(props: CardType) {
    const {name, info, fuel, type, people, imageUrl, price} = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {data: favorites = []} = useGetFavoriteCarsQuery();
    const [addFavorite] = useAddFavoriteMutation();
    const [deleteFavorite] = useDeleteFavoriteMutation();

    const isFavorite = favorites.some((fav) =>
        fav.name === name && fav.imageUrl === imageUrl
    );

    const [optimisticFavorite, setOptimisticFavorite] = useState(isFavorite);

    useEffect(() => {
        setOptimisticFavorite(isFavorite);
    }, [isFavorite]);

    const onPathToRent = () => {
        dispatch(setSelectedCar(props))
        navigate(`/rent-now`, {state: props});
    }

    const onFavorite = async () => {
        const newState = !optimisticFavorite;
        setOptimisticFavorite(newState);

        try {
            if (newState) {
                await addFavorite(props);
            } else {
                const itemToDelete = favorites.find(fav =>
                    fav.name === name && fav.imageUrl === imageUrl
                );
                if (itemToDelete) {
                    await deleteFavorite(itemToDelete.id);
                }
            }
        } catch (error) {
            console.error('Failed to change favorite', error);
            setOptimisticFavorite(prev => !prev);
        }
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
                    <Box sx={{display: "flex", flexDirection: "column",}}>
                        <Typography variant='body1' sx={{color: '#1A202C', fontSize: '20px'}}>{name}</Typography>
                        <Typography variant='body2' sx={{color: '#90A3BF', fontSize: '14px'}}>{info}</Typography>
                    </Box>
                    <Button sx={{color: optimisticFavorite ? 'red' : 'black'}} onClick={onFavorite}><FavoriteIcon/></Button>
                </Box>
                <CarImage imageUrl={imageUrl} name={name} />
                <CarAttributes fuel={fuel} type={type} people={people}/>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography variant='body1'>${price}/day</Typography>
                    <Button variant='contained' onClick={onPathToRent}>Rent Now</Button>
                </Box>
            </CardContent>
        </Card>
    )
}

export default CardItem;