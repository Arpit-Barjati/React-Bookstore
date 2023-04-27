import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import { BookContainer } from './components/BookContainer/BookContainer';
import { BookDetail } from './components/BookDetail/BookDetail';
import { Cart } from './components/Cart/Cart';
import { Orders } from './components/Orders/Orders';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<BookContainer/>}/>
        <Route path='/books/:id' element={<BookDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Orders/>}/>
      </Routes>
    </div>
  );
}

export default App;
