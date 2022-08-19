import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import Users from './pages/Users';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/users',
    component: Users
  },
  {
    path: '/user/:id',
    component: User
  },
  {
    path: '/about',
    component: About
  },
];

export default routes;
