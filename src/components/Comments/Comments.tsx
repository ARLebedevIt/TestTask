import React, {useEffect, useState, memo, FC} from 'react'
import { commentsAPI } from '../../api/commentsAPI'
import { CommentsType } from '../../types/commentsTS'
import { PostType } from '../../types/postsTS'

type Props = {
  id: string
  postInfo: PostType | null
}

const Comments: FC<Props> = memo(({id, postInfo}) => {
  const [comments, setComments] = useState<CommentsType[] | null>(null)
  useEffect(() => {
    const fetchComments = async () => {
      if (postInfo != null) {
        let response = await commentsAPI.getComments(id)
        setComments(response)
      }
    }
    fetchComments()
  }, [postInfo])
  return (
    <div>{comments?.map(item => <div key={item.id}>{`Комментарий: ${item.name}`}</div>)}</div>
  )
})

export default Comments