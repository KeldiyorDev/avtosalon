import { Route, Routes } from 'react-router-dom';
import Car from './pages/Car';
import Cars from './pages/Cars';
import Categories from './pages/Categories';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Categories />} />
      <Route path='cars/:id' element={<Cars />} />
      <Route path='cars/:id/:id2' element={<Car />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
