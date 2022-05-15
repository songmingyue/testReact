import { router } from '../src/pages/router';
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  ...router,
  {
    path: '/',
    redirect: '/userMessage/basicInfo/index',
  },
  {
    component: './404',
  },
];
