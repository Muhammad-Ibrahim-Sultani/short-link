import React from 'react';
import { Link } from 'react-router-dom';

import { APP_ROUTES } from 'routes/routes';

const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to={APP_ROUTES.AUTH_ROUTES.registration}>Registration Page</Link>
      <br />
      <Link to={APP_ROUTES.PROTECTED_ROUTES.home}>Home Page</Link>
    </div>
  );
};

export default LoginPage;
