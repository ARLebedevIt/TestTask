import React, { FC, useEffect, useState, memo, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { postsAPI } from '../../../api/postsAPI'
import { PostType } from '../../../types/postsTS'
import User from '../../Users/User/User'
import Comments from '../../Comments/Comments'

const PostInfo: FC = memo(() => {
  const [postInfo, setPost] = useState<PostType | null>(null)
  let { id } = useParams()
  useEffect(() => {
    const fetchPost = async () => {
      if (id !== null) {
        let response = await postsAPI.getCurrPost(id!)
        setPost(response)
      }
    }
    fetchPost()
  }, [])
  return (
    <div className='postInfo__content'>
      <div className="postInfo__items">
        <div className="postInfo__row_bio">
            <User postInfo={postInfo} />
        </div>
        <div className="postInfo__row_post">
          <div className='postInfo__item'>
            {`Пост: ${postInfo?.title}`}
          </div>
        </div>
        <div className="postInfo__row_comments">
          <Comments postInfo={postInfo} id={id!} />
        </div>
      </div>
    </div>
  )
})

export default PostInfo