import { lazy } from 'react';
import { RenderRoutes } from './Router';
import { IRouterConfig } from './types';

const DirectionView = lazy(
  () => import('../modules/direction/components/DirectionView'),
);
const MainView = lazy(() => import('../modules/main/components/MainView'));
const DirectionsList = lazy(
  () => import('../modules/direction/components/DirectionsList'),
);

// router cfg will go here
const ROUTER_CONFIG: IRouterConfig[] = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: MainView,
    title: 'Головна',
  },
  {
    path: '/direction',
    key: 'DIRECTION',
    exact: false,
    component: RenderRoutes,
    routes: [
      {
        path: '/direction',
        key: 'DIRECTION_ROOT',
        exact: true,
        component: DirectionsList,
        title: 'Напрямки',
      },
      {
        path: '/direction/covid-19',
        key: 'DIRECTION_COVID',
        exact: true,
        component: DirectionView,
        title: 'COVID-19',
      },
      {
        path: '/direction/therapy',
        key: 'DIRECTION_THERAPY',
        exact: true,
        component: DirectionView,
        title: 'Терапія',
      },
      {
        path: '/direction/ophthalmology',
        key: 'DIRECTION_OPHTALMOLOGY',
        exact: true,
        component: DirectionView,
        title: 'Офтальмологія',
      },
      {
        path: '/direction/surgery',
        key: 'DIRECTION_SURGERY',
        exact: true,
        component: DirectionView,
        title: 'Хірургія',
      },
      {
        path: '/direction/virology',
        key: 'DIRECTION_VIROLOGY',
        exact: true,
        component: DirectionView,
        title: 'Вірусологія',
      },
      {
        path: '/direction/cardiology',
        key: 'DIRECTION_CARDIOLOGY',
        exact: true,
        component: DirectionView,
        title: 'Кардіологія',
      },
      {
        path: '/direction/pediatrics',
        key: 'DIRECTION_PEDIATRICS',
        exact: true,
        component: DirectionView,
        title: 'Педіатрія',
      },
    ],
  },
];

export default ROUTER_CONFIG;
