import {Box} from "@mui/material";

type ImageProps = {
    imageUrl: string;
    name: string;
}

function CarImage(props: ImageProps) {
    const {imageUrl, name} = props;
    return (
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
    )
}

export default CarImage;