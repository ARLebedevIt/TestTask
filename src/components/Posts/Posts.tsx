import React, { useState, FC, memo } from 'react'
import { PostType } from '../../types/postsTS'
import './Posts.css'
import Users from '../Users/Users'
import PostList from './PostList/PostList'
import { useLocation } from 'react-router-dom'

const Posts: FC = memo(() => {
  const [posts, setPosts] = useState<PostType[] | null>(null)
  const [currUser, setUser] = useState<string | null>(null) 
  return (
    <div className='posts__content'>
      <div className="posts__items">
        <div className="post__item">
          <Users setUser={setUser} />
        </div>
        <div className="post__item">
          <PostList currUser={currUser} setPosts={setPosts} posts={posts} />
        </div>
      </div>
    </div>
  )
})

export default Posts