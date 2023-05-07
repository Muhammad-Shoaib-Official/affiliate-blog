import React from 'react'
import { Box } from '@mui/material'
import Article from './Article'
import { storeHeaderData } from '../../components/header/data'
import { Container, GlobalSubtitle, Header } from '../../components/export'

const StoreModule = () => {
  return (
    <Box className='store-module'>
      <Header headerData={storeHeaderData} />
      <Container>
        <Box my={4}>
          <GlobalSubtitle title='EXPLORE OUR store' />
          <div className='store-wrapper'>
            {["", "", "", "", "", "", "", ""]?.map(item =>
              <Article key={item} />
            )}
          </div>
        </Box>
      </Container>
    </Box>
  )
}

export default StoreModule