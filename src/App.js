import { Route, Routes } from 'react-router';
import './App.css';
import Counter from './Components/UI/Counter';
import Post from './Components/UI/Post';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Counter/>}/>
      <Route path='/post' element={<Post/>}/>
    </Routes>
  );
}

export default App;
