import Header from "./header/Header";
import Main from "./main/Main";
import {useState} from "react";
import Footer from "./footer/Footer";

function MainPage() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <>
            <Header onSearch={setSearchQuery}/>
            <Main searchQuery={searchQuery}/>
            <Footer/>
        </>
    )
}

export default MainPage;