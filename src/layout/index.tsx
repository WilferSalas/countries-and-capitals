// @packages
import { FC } from 'react';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => (
  <Box>
    <Outlet />
  </Box>
);

export default Layout;
