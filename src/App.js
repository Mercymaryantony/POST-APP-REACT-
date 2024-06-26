import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Search from './components/Search';
import Delete from './components/Delete';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/s' element={<Search/>}/>
        <Route path='/d' element={<Delete/>}/>
        <Route path='/v' element={<View/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
