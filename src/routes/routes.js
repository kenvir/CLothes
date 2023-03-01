import config from '~/config';

import Home from '~/pages/Home/Home';
import Shop from '~/pages/Shop/Shop';
import Blog from '~/pages/Blog/Blog';
import Contact from '~/pages/Contact/Contact';
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.shop, component: Shop },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
