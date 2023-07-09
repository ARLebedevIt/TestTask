import { Box, IconButton, PaletteMode, useTheme } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { Link, NavLink } from "react-router-dom"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GitHubIcon from '@mui/icons-material/GitHub';

type Props = {
  setThemeMode: Dispatch<SetStateAction<PaletteMode>>
}

const Header: FC<Props> = ({ setThemeMode }) => {
  const { palette: { mode } } = useTheme();
  return (
    <>
      <AppBar color='primary' position='sticky'>
        <Toolbar sx={{ display: 'flex', gap: '60px', justifyContent: 'center' }}>
          <Link target='_blank' to={'https://github.com/ARLebedevIt/TestTask'}><GitHubIcon sx={{ fill: 'white' }} fontSize='large' /></Link>
          <Box>
            <Typography><NavLink style={{ color: 'white' }} to={'/posts'}>Posts App</NavLink></Typography>
          </Box>
          <Box>
            <IconButton sx={{ ml: 1 }} onClick={() => setThemeMode(prev => prev == 'light' ? 'dark' : 'light')} color="inherit">
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header