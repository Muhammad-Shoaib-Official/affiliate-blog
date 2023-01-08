import React from 'react';
import { TextField, Box, Typography, Stack } from '@mui/material'
import { Category, TopBar } from '../../components/export'
import { Search } from '@mui/icons-material';
import { TagsList } from '../../components/mockData/Tags';

const HomeModule = () => {
    return (
        <Box className='home'>
            {/* topbar */}
            <TopBar />
            {/* header */}
            <Stack alignItems="center" spacing={5} mt={5}>
                <Typography maxWidth={1150} textAlign="center" variant='h3' lineHeight={1.1} sx={{ fontSize: "4rem" }} >Hey, we’re Reiro. We promote positive culture through inspiring articles on health, design, and web.</Typography>
                <TextField className='search-input' fullWidth sx={{ borderRadius: "30px", backgroundColor: "#f1f1f3", maxWidth: 500, "MuiInputBase-root": { borderRadius: "30px" } }} placeholder='Search here...' InputProps={{ endAdornment: <Search sx={{ padding: 1, borderRadius: "50%", backgroundColor: "#f9c345" }} /> }} />
            </Stack>
            <Stack mt={8} sx={{ flexDirection: { xs: "column", lg: "row" }, spacing: 2, gap: 1.75, alignItems: "center", justifyContent: "center" }}>
                {
                    TagsList?.map(({ image, label, link }) => (
                        <Category key={link} image={image} label={label} link={link} />
                    ))
                }
            </Stack>
        </Box>
    )
}

export default HomeModule