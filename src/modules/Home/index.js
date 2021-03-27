import Home from './Home';
import logo from '../../styles/img/graph.svg';
import logoSelected from '../../styles/img/graph-selected.svg';

export default {
    routeModule: {
        path: '/Home',
        component: Home,
        key: 'Último Jogo',
        icon : logo,
        iconSelected : logoSelected,
        privilege: ' ',
        show : true,
        exact: true,
        routeComponents: [{
            path: '/Home',
            component: null,
            key: 'Último Jogo',
            privilege: ' '
        }]
    }
};

