import Grupo8 from './Grupo8';
import logo from '../../styles/img/graph.svg';
import logoSelected from '../../styles/img/graph-selected.svg';

export default {
    routeModule: {
        path: '/Grupo8',
        component: Grupo8,
        key: 'Grupo 8',
        icon : logo,
        iconSelected : logoSelected,
        privilege: ' ',
        show : true,
        exact: true,
        routeComponents: [{
            path: '/Grupo8',
            component: null,
            key: 'Grupo 8',
            privilege: ' '
        }]
    }
};

