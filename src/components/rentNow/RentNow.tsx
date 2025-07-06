import HeaderAlsoPages from "../headerAlsoPages/headerAlsoPages";
import ContentForm from "./form/ContentForm";
import Footer from "../mainPage/footer/Footer";

function RentNow() {
    return (
        <>
            <HeaderAlsoPages caption="Rent Now" />
            <ContentForm/>
            <Footer/>
        </>
    )
}

export default RentNow;