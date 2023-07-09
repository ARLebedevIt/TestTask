import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useState } from 'react';
import createTheme from '@mui/material/styles/createTheme';
import { Box, GlobalStyles, PaletteMode, PaletteOptions, ThemeProvider } from '@mui/material';
import Header from './components/Header/Header';

const Posts = lazy(() => import(/* webpackChunkName: "Posts" */ './components/Posts/Posts'))
const PostInfo = lazy(() => import(/* webpackChunkName: "PostInfo" */ './components/Posts/PostInfo/PostInfo'))

const App = () => {
  const [themeMode, setThemeMode] = useState<PaletteMode>('dark')
  const theme = createTheme({
    palette: {
      mode: themeMode,
      main: '#1976d2'
    } as PaletteOptions
  })
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ body: { backgroundColor: `${themeMode == 'dark' ? '#121212' : '#FFFFFF'}` } }} />
      <Box bgcolor={'background.default'} color={'text.primary'} sx={{ position: 'relative' }}>
        <Header setThemeMode={setThemeMode} />
        <Suspense fallback={null}>
          <Routes>
            <Route path='/' element={<Navigate to='/posts' />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/posts/:id' element={<PostInfo />} />
            <Route path="*" element={<Posts />} />
          </Routes>
        </Suspense>
      </Box>
    </ThemeProvider>
  );
}

export default App;