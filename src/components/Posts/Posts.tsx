import React, { useState, FC, memo } from 'react'
import { PostType } from '../../types/postsTS'
import PostList from './PostList/PostList'
import { Box, Container } from '@mui/material'
import Navbar from '../Navbar/Navbar'

const Posts: FC = memo(() => {
  const [posts, setPosts] = useState<PostType[] | null>(null)
  const [currUser, setUser] = useState<string | null>(null)
  const [currLimit, setLimit] = useState<string>('20')
  return (
    <Container disableGutters maxWidth={'xl'} sx={{ mt: '20px', minHeight: '100vh' }}>
      <Box sx={{ px: '20px', gap: '30px', display: 'flex', flexDirection: { 'xs': 'column', 'md': 'row' } }}>
        <Box>
          <Navbar setLimit={setLimit} currLimit={currLimit} currUser={currUser} setUser={setUser} />
        </Box>
        <Box>
          <PostList currLimit={currLimit} currUser={currUser} setUser={setUser} setPosts={setPosts} posts={posts} />
        </Box>
      </Box>
    </Container>
  )
})

export default Posts