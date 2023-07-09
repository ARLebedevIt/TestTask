import React, { Dispatch, FC, SetStateAction, memo, useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button/Button';
import { useTheme } from '@mui/material';
import { usersAPI } from '../../../api/usersAPI';
import { UsersType } from '../../../types/usersTS';
import { PropsUser } from '../Navbar';

  /* 
    Зачастую запросы на сервер делаются строго в строковом формате, поэтому операции мы проводим над типом number, а уже итоговый результат приобразуем
    в строку usersAPI.getUsers(`${1}`)
  */

const UsersFilter: FC<PropsUser> = memo(({ setUser, currUser }) => {
  const { palette: { mode } } = useTheme()
  const [users, setUsers] = useState<UsersType[] | null>(null)
  useEffect(() => {
    const fetchUsers = async () => {
      let response = await usersAPI.getUsers(`${1}`)
      setUsers(response)
    }
    fetchUsers()
  }, [])
  return (
    <FormControl sx={{ display: 'flex', gap: '20px' }}>
      <InputLabel id="demo-simple-select-label">Пользователь</InputLabel>
      <Select sx={{ width: '250px' }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Пользователи"
        value={currUser as string}
        onChange={(e: SelectChangeEvent<string>) => setUser(e.target.value as string)}>
        {users?.map(item => <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>)}
      </Select>
      <Button sx={{ border: `.1px solid ${mode == 'dark' ? 'grey' : '#1976D2'}` }} variant='text' onClick={() => setUser(null)}>
        Все пользователи
      </Button>
    </FormControl>
  )
})

export default UsersFilter