import Dashboard  from '../components/admin/Dashboard';
import Productos from '../components/admin/Productos';

const routes = [
    { path: '/admin', exact:true, name: 'Admin' },
    { path: '/admin/dashboard', exact:true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/productos', exact:true, name: 'Profile', component: Productos }
];

export default routes;