import React from 'react';

import { Routes, Route } from 'react-router-dom';

import AppBar from 'components/appbar';
import { RouteType } from 'types';

import { PROTECTED_ROUTES } from './routes';

const ProtectedRoutes: React.FC = () => (
  <Routes>
    <Route element={<AppBar />}>
      {PROTECTED_ROUTES.map((route: RouteType) => (
        <Route key={route.id} path={route.path} element={<route.component />} />
      ))}
    </Route>
  </Routes>
);

export default ProtectedRoutes;
