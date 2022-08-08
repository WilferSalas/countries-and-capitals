// @pages
import HomePage from '../pages/home-page';
import Layout from '../layout';
import NotFoundPage from '../pages/not-found-page';

const routes = [
  {
    component: HomePage,
    layout: Layout,
    path: '/',
  },
  {
    component: NotFoundPage,
    layout: Layout,
    path: '*',
  },
];

export default routes;
