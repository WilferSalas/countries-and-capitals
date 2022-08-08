/* eslint-disable react/no-array-index-key */
// @packages
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// @scripts
import routes from './routes';

const Navigation: FC = () => (
  <BrowserRouter>
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} element={<route.layout />}>
          <Route path={route.path} element={<route.component />} />
        </Route>
      ))}
    </Routes>
  </BrowserRouter>
);

export default Navigation;
