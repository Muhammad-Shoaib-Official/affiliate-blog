import { Typography, Stack, Box } from '@mui/material'
import React from 'react'
import { GlobalSubtitle } from '../export'
import { TagsList } from '../mockData/Tags'
import Category from './Category'

const PopularCategories = () => {
    return (
        <>
            <GlobalSubtitle title="Popular tags" />
            <Stack className='popular-categories' sx={{ flexDirection: { xs: "column", lg: "row" }, spacing: 2, gap: 1.75, alignItems: "center", justifyContent: "center" }}>
                {TagsList?.map(({ image, label, link }) => (
                    <Box key={link} flex={1}>
                        <Category image={image} label={label} link={link} />
                    </Box>
                ))
                }
            </Stack>
        </>
    )
}

export default PopularCategories