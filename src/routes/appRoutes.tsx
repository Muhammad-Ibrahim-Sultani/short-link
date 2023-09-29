import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import AuthRoutes from './authRoutes';
import ProtectedRoutes from './protectedRoutes';

const AppRoutes: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthRoutes />
        <ProtectedRoutes />
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
