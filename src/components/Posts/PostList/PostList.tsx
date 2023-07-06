import React, { Dispatch, FC, SetStateAction, memo, useEffect } from 'react'
import { PostType } from '../../../types/postsTS'
import Post from '../Post/Post'
import { postsAPI } from '../../../api/postsAPI'

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
      {posts?.map(item => (
        <Post key={item.id} post={item} />
      ))}
    </>
  )
})

export default PostList