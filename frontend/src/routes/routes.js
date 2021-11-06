import Dashboard  from '../components/admin/Dashboard';
import Productos from '../components/admin/Productos';
import AddProduct from '../components/admin/AddProduct';
import EditProduct from '../components/admin/EditProduct';
import Usuarios from '../components/admin/Usuarios';;


const routes = [
    { path: '/admin', exact:true, name: 'Admin' },
    { path: '/admin/dashboard', exact:true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/productos', exact:true, name: 'Profile', component: Productos },
    { path: '/admin/AddProduct', exact:true, name: 'Dashboard', component: AddProduct },
    { path: '/admin/EditProduct', exact:true, name: 'Dashboard', component: EditProduct },
    { path: '/admin/Usuarios', exact:true, name: 'Dashboard', component: Usuarios }



];

export default routes;