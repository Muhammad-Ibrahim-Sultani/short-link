export type AppRouteType = {
  AUTH_ROUTES: AuthRouteType;
  PROTECTED_ROUTES: ProtectedRouteType;
};

export type AuthRouteType = {
  login: string;
  registration: string;
};

export type ProtectedRouteType = {
  home: string;
};
