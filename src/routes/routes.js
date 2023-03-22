import config from '~/config';

import Home from '~/pages/Home/Home';
import Shop from '~/pages/Shop/Shop';
import Blog from '~/pages/Blog/Blog';
import Contact from '~/pages/Contact/Contact';
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';
import Cart from '~/pages/Cart/Cart';
import CheckOut from '~/pages/CheckOut/CheckOut';
import FAQ from '~/pages/FAQ/FAQ';
import ProductDetail from '~/pages/ProductDetail/ProductDetail';

// const { id } = useParams;

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.shop, component: Shop },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.checkout, component: CheckOut },
    { path: config.routes.checkOut, component: CheckOut },
    { path: config.routes.faq, component: FAQ },
    { path: config.routes.productDetail, component: ProductDetail },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
