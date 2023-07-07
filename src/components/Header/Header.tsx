import { PaletteMode } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { NavLink } from "react-router-dom"

type Props = {
  themeMode: PaletteMode,
  setThemeMode: Dispatch<SetStateAction<PaletteMode>>
}

const Header: FC<Props> = (props: Props) => {
  return (
    <>
      <AppBar color='primary' position='sticky'>
        <Toolbar >
          <Typography variant="h6"><NavLink to={'/posts'}>ЗДЕСЬ БУДЕТ ЛОГО</NavLink></Typography>

        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header