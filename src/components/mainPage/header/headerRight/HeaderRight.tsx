import { Box, Button } from "@mui/material";
import iconFavoriteUrl from '../icons/favorite.svg';
import iconNotificationUrl from '../icons/notification.svg';
import iconSettingUrl from '../icons/setting.svg';
import iconUserPhotoUrl from '../icons/userPhoto.svg';
import {memo} from "react";

const HeaderRightIcons = () => (
    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button><img src={iconFavoriteUrl} alt="favorite" /></Button>
        <Button><img src={iconNotificationUrl} alt="notification" /></Button>
        <Button><img src={iconSettingUrl} alt="setting" /></Button>
        <Button><img src={iconUserPhotoUrl} alt="userPhoto" /></Button>
    </Box>
);

export default memo(HeaderRightIcons);