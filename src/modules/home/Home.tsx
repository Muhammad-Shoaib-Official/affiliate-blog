import React from 'react';
import { TextField, Box, Typography, Stack, Grid } from '@mui/material'
import { Category, Container, Tags, TopBar } from '../../components/export'
import { Search } from '@mui/icons-material';
import { TagsList } from '../../components/mockData/Tags';
//bg image import 
import { articleImage, blogSlugBg } from '../../../public/assets/export';
import Image from 'next/image';

const HomeModule = () => {
    return (
        <Box className='home' sx={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 1)), url(${blogSlugBg.src})`, }}>
            {/* topbar */}
            <TopBar />
            {/* header */}
            <Stack alignItems="center" spacing={5} mt={5}>
                <Typography maxWidth={1150} textAlign="center" className="main-heading" >Hey, we’re Reiro. We promote positive culture through inspiring articles on health, design, and web.</Typography>
                <TextField className='search-input' fullWidth sx={{ borderRadius: "30px", backgroundColor: "#f1f1f3", maxWidth: 500, "MuiInputBase-root": { borderRadius: "30px" } }} placeholder='Search here...' InputProps={{ endAdornment: <Search sx={{ padding: 1, borderRadius: "50%", backgroundColor: "#f9c345" }} /> }} />
            </Stack>
            <Container>
                <Box mt={8} >
                    <Typography mb={1} flex={1} className='upper-case'>popular categories</Typography>
                    <Stack sx={{ flexDirection: { xs: "column", lg: "row" }, spacing: 2, gap: 1.75, alignItems: "center", justifyContent: "center" }}>
                        {
                            TagsList?.map(({ image, label, link }) => (
                                <Category key={link} image={image} label={label} link={link} />
                            ))
                        }
                    </Stack>
                </Box>
            </Container>
            <Container>
                <Box mt={3}>
                    <Typography mb={1} flex={1} className='upper-case'>what's new</Typography>
                    <Grid container >
                        <Grid item xs={12} xl={8}>
                            <aside>
                                <Image src={articleImage} alt={"article image"} width={900} height={680} className="border-22" />
                                <Tags name="LifeStyle" link='/life-style' />
                            </aside>
                        </Grid>
                        <Grid item xs={12} xl={4}></Grid>

                    </Grid>
                </Box>

            </Container>
        </Box>
    )
}

export default HomeModule