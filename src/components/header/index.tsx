import React, { FC } from 'react'
import { Search } from '@mui/icons-material'
import { Box, Stack, TextField, Typography } from '@mui/material'
import { TopBar } from '../export'

const Header: FC<any> = (props) => {
    const { headerData: { heroTitle, heroSearch, excerpt } } = props;
    return (
        <Box className='header'>
            <Box pt={2}>
                <TopBar />
            </Box>
            <Stack alignItems="center" spacing={5} mt={5}>
                {heroTitle &&
                    <Typography maxWidth={1150} textAlign="center" className="main-heading" >{heroTitle}</Typography>
                }
                {
                    heroSearch &&
                    <TextField className='search-input' fullWidth sx={{ borderRadius: "30px", backgroundColor: "#f1f1f3", maxWidth: 500, "MuiInputBase-root": { borderRadius: "30px" } }} placeholder='Search here...' InputProps={{ endAdornment: <Search sx={{ padding: 1, borderRadius: "50%", backgroundColor: "#f9c345",cursor:"pointer" }} /> }} />
                }
                {excerpt && <Typography className='excerpt'>{excerpt}</Typography>}
            </Stack>
        </Box>
    )
}

export default Header