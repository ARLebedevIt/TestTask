import React, { FC, useEffect, useState } from 'react'
import { UsersType } from '../../../types/usersTS'
import { usersAPI } from '../../../api/usersAPI'
import { PostType } from '../../../types/postsTS'

type Props = {
  postInfo: PostType | null
}

const User: FC<Props> = ({postInfo}) => {
  const [userInfo, setUser] = useState<UsersType | null>(null)
  useEffect(() => {
    const fetchUser = async () => {
      if (postInfo == null) {
        return
      } else {
        let response = await usersAPI.getCurrUser(postInfo.userId)
        setUser(response)
      }
    }
    fetchUser()
  }, [postInfo])
  return (
    <div className='user__content'>
      <div className="user__items">
        <div className="user__item">
          <span>{`Идентификатор: ${userInfo?.id}`}</span>
        </div>
        <div className="user__item">
          <span>{`Автор поста: ${userInfo?.name}`}</span>
        </div>
        <div className="user__item">
          <span>{`Контакты: Mail: ${userInfo?.email}, Телефон: ${userInfo?.phone}`}</span>
        </div>
        <div className="user__item">
          <span>{`Сайт: ${userInfo?.website}`}</span>
        </div>
      </div>
    </div>
  )
}

export default User