import React from 'react';
import { Link } from 'react-router-dom';

import { APP_ROUTES } from 'routes/routes';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to={APP_ROUTES.AUTH_ROUTES.login}>Login Page</Link>
      <br />
      <Link to={APP_ROUTES.AUTH_ROUTES.registration}>Registration Page</Link>
    </div>
  );
};

export default HomePage;
