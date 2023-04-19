import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import {
    MemoryRouter,
    Link,
    matchPath,
    useLocation,
  } from 'react-router-dom';
  import { StaticRouter } from 'react-router-dom/server';

  function Router(props) {
    const { children } = props;
    if (typeof window === 'undefined') {
      return <StaticRouter location="/drafts">{children}</StaticRouter>;
    }
  
    return (
      <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
        {children}
      </MemoryRouter>
    );
  }
  Router.propTypes = {
    children: PropTypes.node,
  };
  
  function useRouteMatch(patterns) {
    const { pathname } = useLocation();
  
    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }
  
    return null;
  }
const NavBarComp = () => {
    const routeMatch = useRouteMatch(['/products', '/customers', '/purchases']);
    const currentTab = routeMatch?.pattern?.path;

    return (
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={currentTab} aria-label="basic tabs example" centered>
            <Tab label="Products" value='/products' to="/products" component={Link} />
            <Tab label="Customers" value='/customers' to="/customers" component={Link} />
            <Tab label="Purchases" value='/purchases' to="/purchases" component={Link} />
          </Tabs>
        </Box>
      </Box>
    );
}
  
export default NavBarComp
