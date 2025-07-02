import { Box, Button, TextField } from "@mui/material";
import { useState, useCallback } from "react";
import iconSearchUrl from '../icons/search.svg';
import iconFilterUrl from '../icons/filter.svg';

type Props = {
    onSearch: (value: string) => void;
};

const HeaderSearch = ({ onSearch }: Props) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = useCallback(() => {
        onSearch(searchValue);
        setSearchValue('');
    }, [searchValue, onSearch]);

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            borderLeft: '1px solid black',
            borderRight: '1px solid black',
            borderRadius: '30px',
        }}>
            <Button onClick={handleSearch}><img src={iconSearchUrl} alt="search" /></Button>
            <TextField
                label="Search something here"
                variant="outlined"
                sx={{ width: 492 }}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button><img src={iconFilterUrl} alt="filter" /></Button>
        </Box>
    );
};

export default HeaderSearch;