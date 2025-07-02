import CardItem from "./card/CardItem";
import {Box} from "@mui/material";
import {useFetchCarItems} from "../../../fetchs/useFetchCarItems";
import LoadingComponent from "../../loading/LoadingComponent";
import ErrorComponent from "../../error/ErrorComponent";

function Main() {
    const {data: cartItems, loading, error} = useFetchCarItems();

    if (loading) {
        return (
            <LoadingComponent/>
        )
    }

    if (error) {
        return (
            <ErrorComponent/>
        )
    }

    return (
        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: '54px',
            maxWidth: "1900px",
            margin: "20px auto 0 auto",
            padding: "0 64px",
        }}>
            {cartItems.map((obj, id) => (
                <CardItem
                    key={id}
                    {...obj}
                />
            ))}
        </Box>
    )
}

export default Main;