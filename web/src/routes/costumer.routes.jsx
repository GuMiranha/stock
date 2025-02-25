import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Product } from '../pages/Product';
import { NotFound } from '../pages/NotFound';
export function CostumerRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/product" element={<Product />} />
 
      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}