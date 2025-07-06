import {Box, TextField, Typography} from "@mui/material";

type InfoType = {
    caption: string;
    label: string;
}

function InputInfo(props: InfoType) {
    const {caption, label} = props;

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minWidth: '386px',
        }}>
            <Typography variant="h6" gutterBottom>{caption}</Typography>
            <TextField label={label} variant="outlined"/>
        </Box>
    )
}

export default InputInfo;