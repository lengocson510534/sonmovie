import { Route, Routes } from 'react-router-dom'
import Catalog from '../Components/Catalog/Catalog';
import Detail from '../Pages/Detail/Detail';
import Home from '../Pages/Home';


function Router() {
  return (
    <Routes>
      <Route path='/:category/search/:keyword' element={<Catalog />} />
      <Route path='/:category' element={<Catalog />} />
      <Route path='/:category/:id' element={<Detail />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default Router;