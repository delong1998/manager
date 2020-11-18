import Login from "../pages/Login";
import Index from "../pages/admin/dashboard/index"
import productsList from "../pages/admin/products/List";
import productsEdit from "../pages/admin/products/Edit";
import ordersList from "../pages/admin/orders/List";
import ordersEdit from "../pages/admin/orders/Edit";
import Register from "../pages/Register";
import PageNotFound from "../pages/PageNotFound"

export const mainRoutes = [
    {
        path: '/login',
        component: Login
    },
    // {
    //     path: '/register',
    //     component: Register
    // },
    {
        path: '/404',
        component: PageNotFound
    }
]

export const adminRoutes = [
    {
        path: '/admin/dashboard',
        component: Index,
        isShow: true,
        title: '看板',
    },
    {
        path: '/admin/products',
        component: productsList,
        exact: true,
        isShow: true,
        title: '商品管理'
    },
    {
        path: '/admin/products/edit/',
        component: productsEdit,
        isShow: false,  
    },
    // {
    //     path: '/admin/orders',
    //     component: ordersList,
    //     exact: true,
    //     isShow: true,
    //     title: '订单管理'
    // },
    // {
    //     path: '/admin/products/edit/',
    //     component: ordersEdit,
    //     isShow: false,  
    // },
]