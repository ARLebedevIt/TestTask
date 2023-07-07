import React, { useState, FC, memo } from 'react'
import { PostType } from '../../types/postsTS'
import Users from '../Users/Users'
import PostList from './PostList/PostList'
import { Box, Container } from '@mui/material'

const Posts: FC = memo(() => {
  const [posts, setPosts] = useState<PostType[] | null>(null)
  const [currUser, setUser] = useState<string | null>(null) 
  return (
    <Container disableGutters maxWidth={'xl'} sx={{mt: '20px', minHeight: '100vh'}}>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          <Users setUser={setUser} />
        </Box>
        <Box>
          <PostList currUser={currUser} setPosts={setPosts} posts={posts} />
        </Box>
      </Box>
    </Container>
  )
})

export default Posts