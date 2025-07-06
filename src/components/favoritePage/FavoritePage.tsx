import {Box} from "@mui/material";
import {useGetFavoriteCarsQuery} from "../../store/carFavoriteApi/carApiFavorites";
import LoadingComponent from "../loading/LoadingComponent";
import ErrorComponent from "../error/ErrorComponent";
import CardItem from "../mainPage/main/card/CardItem";
import HeaderAlsoPages from "../headerAlsoPages/headerAlsoPages";
import Footer from "../mainPage/footer/Footer.tsx";

function FavoritePage() {
    const {data: cartFavoritesItems = [], isLoading, error} = useGetFavoriteCarsQuery();

    if (isLoading) return <LoadingComponent/>
    if (error) return <ErrorComponent/>

    return (
        <>
            <HeaderAlsoPages caption="Favorites" />
            <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: '54px',
                maxWidth: "1900px",
                margin: "20px auto 0 auto",
                padding: "0 64px",
            }}>
                {cartFavoritesItems.map((items) => (
                    <CardItem
                        key={items.id}
                        {...items}
                    />
                ))}
            </Box>
            <Footer/>
        </>
    )
}

export default FavoritePage;