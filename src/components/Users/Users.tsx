import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { UsersType } from '../../types/usersTS'
import { usersAPI } from '../../api/usersAPI'

type Props = {
  setUser: Dispatch<SetStateAction<string | null>>
}

const Users: FC<Props> = ({setUser}) => {
  const [users, setUsers] = useState<UsersType[] | null>(null)
  useEffect(() => {
    const fetchUsers = async () => {
      let response = await usersAPI.getUsers()
      setUsers(response)
    }
    fetchUsers()
  }, [])  
  return (
    <select onChange={(e) => setUser(e.target.value)}>
      <option disabled>Выберите из списка</option>
      {users?.map(item => <option value={item.id} key={item.id}>{item.name}</option>)}
    </select>
  )
}

export default Users