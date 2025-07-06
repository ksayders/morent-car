import {Box} from "@mui/material";
import LeftContent from "../leftContent/LeftContent";
import RightContent from "../rightContent/RightContent";
import {useState, useEffect} from "react";

function UserInfoStep() {
    const [showRight, setShowRight] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowRight(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Box sx={{
            display: "flex",
            height: "80vh",
            position: "relative"
        }}>
            <LeftContent/>
            <Box
                sx={{
                    display: "flex",
                    width: "33%",
                    backgroundColor: '#E5FFFE',
                    position: "absolute",
                    top: 0,
                    right: 0,
                    height: "100%",
                    transform: showRight ? 'translateX(0)' : 'translateX(100%)',
                    transition: "transform 0.8s ease-in-out",
                    boxShadow: "-2px 0 8px rgba(0,0,0,0.3)",
                    zIndex: 10,
                }}
            >
                <RightContent />
            </Box>
        </Box>
    )
}

export default UserInfoStep;