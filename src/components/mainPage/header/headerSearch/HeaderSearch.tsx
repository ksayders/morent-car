import { Box, Button, TextField } from "@mui/material";
import { useState, useCallback } from "react";
import SearchIcon from '@mui/icons-material/Search';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

type Props = {
    onSearch: (value: string) => void;
};

const HeaderSearch = ({ onSearch }: Props) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = useCallback(() => {
        onSearch(searchValue);
        setSearchValue('');
    }, [searchValue, onSearch]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }, [handleSearch])

    const handleClear = useCallback(() => {
        onSearch('');
        setSearchValue('');
    }, [onSearch])

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            borderLeft: '1px solid black',
            borderRight: '1px solid black',
            borderRadius: '30px',
        }}>
            <Button onClick={handleSearch}><SearchIcon/></Button>
            <TextField
                label="Search something here"
                variant="outlined"
                sx={{ width: 492 }}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button onClick={handleClear}><DeleteForeverIcon/></Button>
        </Box>
    );
};

export default HeaderSearch;