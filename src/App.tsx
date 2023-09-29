import React from 'react';

import { ThemeProvider, CssBaseline, Box } from '@mui/material';

import { theme } from 'utils/mui';
import AppRoutes from 'routes/appRoutes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppRoutes />
      </Box>
    </ThemeProvider>
  );
};

export default App;
