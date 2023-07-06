import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';
import Posts from './components/Posts/Posts';
import Navbar from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Post from './components/Posts/Post/Post';
import PostInfo from './components/Posts/PostInfo/PostInfo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={'load'}>
        <Routes>
          <Route path='/' element={<Navigate to='/posts' />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:id' element={<PostInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
