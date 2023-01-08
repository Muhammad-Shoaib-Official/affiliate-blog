import { Box, Link } from '@mui/material'
import React from 'react'

interface slugProps{
    name: string;
    link: string;
}

export default function Tags({name, link}: slugProps) {
  return (
    <Box className='tag'>
        <Link href={link}> {name} </Link>
    </Box>
  )
}
