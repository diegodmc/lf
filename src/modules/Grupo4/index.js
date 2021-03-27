import Grupo4 from './Grupo4';
import logo from '../../styles/img/graph.svg';
import logoSelected from '../../styles/img/graph-selected.svg';

export default {
    routeModule: {
        path: '/Grupo4',
        component: Grupo4,
        key: 'Grupo 4',
        icon : logo,
        iconSelected : logoSelected,
        privilege: ' ',
        show : true,
        exact: true,
        routeComponents: [{
            path: '/Grupo4',
            component: null,
            key: 'Grupo 4',
            privilege: ' '
        }]
    }
};

