import { Box } from '@mui/material'
import React from 'react'
import Posts from './Posts'

const Feed = () => {
  return (
    <Box flex={6} p={2}>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </Box>
  )
}

export default Feed
