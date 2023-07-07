import React, { Dispatch, FC, SetStateAction, memo, useEffect } from 'react'
import { PostType } from '../../../types/postsTS'
import Post from '../Post/Post'
import { postsAPI } from '../../../api/postsAPI'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress';
import { Container } from '@mui/material';

type Props = {
  posts: PostType[] | null
  setPosts: Dispatch<SetStateAction<PostType[] | null>>
  currUser: string | null
}

const PostList: FC<Props> = memo(({ posts, setPosts, currUser }) => {
  useEffect(() => {
    const fetchPosts = async () => {
      let result = await postsAPI.getPosts()
      setPosts(result)
    }
    fetchPosts()
  }, [])
  useEffect(() => {
    const fetchUserPosts = async () => {
      if (currUser != null) {
        let result = await postsAPI.getUserPosts(currUser!)
        setPosts(result)
      }
    }
    fetchUserPosts()
  }, [currUser])
  return (
    <>
    <Container maxWidth={false}>
      <List sx={{display: 'flex', gap: '20px', flexDirection: 'column'}}>
        {posts?.map(item => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{display: 'inline'}}>
              <Post post={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </Container>
    </>
  )
})

export default PostList