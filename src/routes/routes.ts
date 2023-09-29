import { AppRouteType, RouteType } from 'types';

import { LoginPage, RegistrationPage } from 'pages/auth';
import { HomePage } from 'pages/protected';

const APP_ROUTES: AppRouteType = {
  AUTH_ROUTES: {
    login: '/',
    registration: '/registration',
  },
  PROTECTED_ROUTES: {
    home: '/home',
  },
};

const AUTH_ROUTES: RouteType[] = [
  {
    id: 'login',
    path: APP_ROUTES.AUTH_ROUTES.login,
    component: LoginPage,
  },
  {
    id: 'registration',
    path: APP_ROUTES.AUTH_ROUTES.registration,
    component: RegistrationPage,
  },
];

const PROTECTED_ROUTES: RouteType[] = [
  {
    id: 'home',
    path: APP_ROUTES.PROTECTED_ROUTES.home,
    component: HomePage,
  },
];

export { APP_ROUTES, AUTH_ROUTES, PROTECTED_ROUTES };
