import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { UsersType } from '../../types/usersTS'
import { usersAPI } from '../../api/usersAPI'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Props = {
  setUser: Dispatch<SetStateAction<string | null>>
}

const Users: FC<Props> = ({setUser}) => {
  const [users, setUsers] = useState<UsersType[] | null >(null)
  useEffect(() => {
    const fetchUsers = async () => {
      let response = await usersAPI.getUsers()
      setUsers(response)
    }
    fetchUsers()
  }, [])  
  return (
    <FormControl>
    <InputLabel id="demo-simple-select-label">Пользователи</InputLabel>
    <Select sx={{width: '250px'}}
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Пользователи"
      onChange={(e: SelectChangeEvent<string>) => setUser(e.target.value as string)}
    >
    {users?.map(item => <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>)}
    </Select>
  </FormControl>
  )
}

export default Users