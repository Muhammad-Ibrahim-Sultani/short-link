import React from 'react';
import { Link } from 'react-router-dom';

import { APP_ROUTES } from 'routes/routes';

const RegistrationPage: React.FC = () => {
  return (
    <div>
      <h1>Registration Page</h1>
      <Link to={APP_ROUTES.AUTH_ROUTES.login}>Login Page</Link>
      <br />
      <Link to={APP_ROUTES.PROTECTED_ROUTES.home}>Home Page</Link>
    </div>
  );
};

export default RegistrationPage;
