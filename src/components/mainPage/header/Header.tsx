import iconSearchUrl from './icons/search.svg';
import iconFilterUrl from './icons/filter.svg';
import iconFavoriteUrl from './icons/favorite.svg';
import iconNotificationUrl from './icons/notification.svg';
import iconSettingUrl from './icons/setting.svg';
import iconUserPhotoUrl from './icons/userPhoto.svg';
import styles from './Header.module.scss'
import {Box, Button, TextField,} from "@mui/material";

function Header() {
    return (
        <Box className={styles['header-container']}>
            <Box className={styles['left-container']}>
                <Button sx={{fontSize: 32}}>MORENT</Button>
                <Box sx={{
                    ml: '64px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderLeft: '1px solid black',
                    borderRight: '1px solid black',
                    borderRadius: '30px',
                }}>
                    <Button><img src={iconSearchUrl} alt="search"/></Button>
                    <TextField
                        id="outlined-basic"
                        label="Search something here"
                        variant="outlined"
                        sx={{width: 492}}
                    />
                    <Button><img src={iconFilterUrl} alt="search"/></Button>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
            }}>
                <Button><img src={iconFavoriteUrl} alt="favorite"/></Button>
                <Button><img src={iconNotificationUrl} alt="notification"/></Button>
                <Button><img src={iconSettingUrl} alt="setting"/></Button>
                <Button><img src={iconUserPhotoUrl} alt="userPhoto"/></Button>
            </Box>
        </Box>
    )
}

export default Header;