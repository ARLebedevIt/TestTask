import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import React, { Dispatch, FC, SetStateAction } from 'react'
import UsersFilter from './UsersFilter/UsersFilter'
import LimitFilter from './LimitFilter/LimitFilter'

export type PropsUser = {
  setUser: Dispatch<SetStateAction<string | null>>
  currUser: string | null
}

export type PropsLimit = {
  setLimit: Dispatch<SetStateAction<string>>
  currLimit: string
}

const Navbar: FC<PropsUser & PropsLimit> = ({ setUser, currUser, currLimit, setLimit}) => {
  return (
    <Container maxWidth={false} disableGutters>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <LimitFilter currLimit={currLimit} setLimit={setLimit} />
        <UsersFilter currUser={currUser} setUser={setUser} />
      </Box>
    </Container>
  )
}

export default Navbar