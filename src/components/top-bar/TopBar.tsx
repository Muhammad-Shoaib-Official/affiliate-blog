import { Box, Stack, Typography, ListItemText, TextField } from '@mui/material'
import { Search } from '@mui/icons-material';
import List from '@mui/material/List'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { home } from '../../consts/export'

const TopBar = () => {
    const { menuList, Logo } = home;
    return (
        <>
            <Stack className='top-bar section-padding' sx={{ flexDirection: { xs: "column", md: "row" } }} justifyContent="space-between" alignItems="center">
                <Box sx={{ display: "flex", alignItems: "center", gap: 3.5 }}>
                    <Box>
                        <Image src={Logo} alt={"logo"} width={20} height={20} />
                    </Box>
                    <List sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
                        {menuList.map(({ label, link }) =>
                            <Link href={link}>
                                <ListItemText>{label}</ListItemText>
                            </Link>
                        )}
                    </List>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
                    <TextField size='small' placeholder='Search here...' InputProps={{ endAdornment: <Search /> }} />
                    <Typography>sign in</Typography>
                </Box>
            </Stack>
        </>
    )
}

export default TopBar