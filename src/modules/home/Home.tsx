import React from 'react';
import { Box } from '@mui/material'
import { Container, PopularCategories, Header, FeaturedPost, Previousposts, LikePosts, Footer, NewPost } from '../../components/export'
import { homeHeaderData } from '../../components/header/data';

const HomeModule = () => {
    return (
        <Box className='home'>
            <Header headerData={homeHeaderData} />
            <Container>
                <Box mt={8} >
                    <PopularCategories />
                </Box>
                <Box mt={3}>
                    <NewPost />
                </Box>
                <Box mt={3}>
                    <FeaturedPost />
                </Box>
                <Box mt={3}>
                    <Previousposts />
                </Box>
                <Box mt={5}>
                    <LikePosts />
                </Box>
            </Container>
        </Box>
    )
}

export default HomeModule