import { Box, Link } from '@mui/material'
import React from 'react'

interface slugProps {
  name: string;
  link: string;
}

export default function Tag({ name, link }: slugProps) {
  return (
    <Box className='tag'>
      <Link href={link}> {name} </Link>
    </Box>
  )
}
