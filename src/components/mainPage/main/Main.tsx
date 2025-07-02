import CardItem from "./card/CardItem";
import {Box} from "@mui/material";

function Main() {
    return (
        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: '54px',
            maxWidth: "1900px",
            margin: "20px auto 0 auto",
            padding: "0 64px",
        }}>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
        </Box>
    )
}

export default Main;