import {Box, Typography} from "@mui/material";
import CarImage from "../../../mainPage/main/card/carImage/CarImage";
import {useSelector} from "react-redux";
import type {RootState} from "../../../../store/store";
import ErrorComponent from "../../../error/ErrorComponent";

function RightContent() {
    const car = useSelector((state: RootState) => state.selectedCar.car)

    if (!car) return <ErrorComponent/>;

    const {imageUrl, name, price} = car;

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            p: '40px 60px',
            backgroundColor: '#E5FFFE',
            borderRadius: '50px',
        }}>
            <Box>
                <Typography variant="h6">Rental Summary</Typography>
                <Typography variant="body2" sx={{color: '#90A3BF'}}>
                    Prices may change depending on the length of the rental and the price of your rental car.
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                gap: '20px'
            }}>
                <CarImage imageUrl={imageUrl} name={name}/>
                <Typography variant='h4'>{name}</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Typography variant='h6'>Total Rental Price</Typography>
                    <Typography variant='body2' sx={{color: '#90A3BF'}}>
                        Overall price and includes rental discount
                    </Typography>
                </Box>
                <Typography variant='h5'>${price}</Typography>
            </Box>
        </Box>
    )
}
export default RightContent;