import { Route, Routes } from 'react-router';
import './App.css';
import Counter from './Components/UI/Counter';
import Post from './Components/UI/Post';
import Login from './Components/UI/Login';

function App() {
  return (
    <Routes>
      <Route path='/'element={<Login/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/post' element={<Post/>}/>
    </Routes>
  );
}

export default App;
