import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { RouteType } from 'types';

import { AUTH_ROUTES } from './routes';

const AuthRoutes: React.FC = () => (
  <Routes>
    {AUTH_ROUTES.map((route: RouteType) => (
      <Route key={route.id} path={route.path} element={<route.component />} />
    ))}
  </Routes>
);

export default AuthRoutes;
