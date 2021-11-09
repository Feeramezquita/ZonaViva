import Dashboard  from '../components/admin/Dashboard';
import Productos from '../components/admin/Productos';
import AddProduct from '../components/admin/AddProduct';
import EditProduct from '../components/admin/EditProduct';
import Usuarios from '../components/admin/Usuarios';
import AddUsuario from '../components/admin/AddUsuario';
import EditUsuario from '../components/admin/EditUsuario';




const routes = [
    { path: '/admin', exact:true, name: 'Admin' },
    { path: '/admin/dashboard', exact:true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/productos', exact:true, name: 'Productos', component: Productos },
    { path: '/admin/AddProduct', exact:true, name: 'AddProduct', component: AddProduct },
    { path: '/admin/EditProduct', exact:true, name: 'EditProduct', component: EditProduct },
    { path: '/admin/Usuarios', exact:true, name: 'Usuarios', component: Usuarios },
    { path: '/admin/AddUsuario', exact:true, name: 'AddUsuario', component: AddUsuario },
    { path: '/admin/EditUsuario', exact:true, name: 'EditUsuario', component: EditUsuario }





];

export default routes;