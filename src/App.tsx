import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense, useState } from 'react';
import Posts from './components/Posts/Posts';
import Navbar from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import PostInfo from './components/Posts/PostInfo/PostInfo';
import createTheme from '@mui/material/styles/createTheme';
import { Box, PaletteMode, ThemeProvider } from '@mui/material';

const App = () => {
  const [themeMode, setThemeMode] = useState<PaletteMode>('dark')
  const theme = createTheme({
    palette: {
      mode: themeMode
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={'background.default'} color={'text.primary'} sx={{position: 'relative'}}>
        <Navbar themeMode={themeMode} setThemeMode={setThemeMode} />
        <Suspense fallback={null}>
          <Routes>
            <Route path='/' element={<Navigate to='/posts' />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/posts/:id' element={<PostInfo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        </Box>
    </ThemeProvider>
  );
}

export default App;