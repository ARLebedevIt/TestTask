import React, { FC } from 'react'
import { PostType } from '../../../types/postsTS'
import './Post.css'
import { useNavigate } from 'react-router-dom'

type Props = {
  post: PostType
}

const Post: FC<Props> = ({post}) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/posts/${post.id}`, { replace: false })} className='post__content'>
      <div className="post__items">
        <div className="post__item">
          <div className="post__title">{post.title}</div>
          <div className="post__text">{post.body}</div>
        </div>
      </div>
    </div>
  )
}

export default Post