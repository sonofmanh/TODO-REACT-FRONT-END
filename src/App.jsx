

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './Card/Card';
import NewNote from './NewNote/NewNote';
import Editnote from './Editnote/Editnote';



const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/newnote' element={<NewNote />} />
        <Route path='/Editnote/:id' element={<Editnote />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App