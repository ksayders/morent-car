import CardItem from "./card/CardItem";
import {Box} from "@mui/material";
import LoadingComponent from "../../loading/LoadingComponent";
import ErrorComponent from "../../error/ErrorComponent";
import {useGetCarsQuery} from "../../../store/carApi/carApi";

function Main({searchQuery}: {searchQuery: string}) {
    const {data: cartItems = [], isLoading, error} = useGetCarsQuery(searchQuery);

    if (isLoading) return <LoadingComponent/>
    if (error) return <ErrorComponent/>

    return (
        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: '54px',
            maxWidth: "1900px",
            margin: "20px auto 0 auto",
            padding: "0 64px",
        }}>
            {cartItems.map((items) => (
                <CardItem
                    key={items.id}
                    {...items}
                />
            ))}
        </Box>
    )
}

export default Main;