import { Link } from 'react-router-dom'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Category} from '@mui/icons-material';
import {Groups3} from '@mui/icons-material';
import {Grain} from '@mui/icons-material';

const MenuPage = () => {

  return (
    <div role="presentation" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem' }}
          color="inherit"
          to={'/products'}
        >
         <Typography
          sx={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}
          color="text.primary">    
          <Category sx={{ fontSize: '2rem', mr: 0.5 }} />
          Products
          </Typography>
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem' }}
          color="inherit"
          to={'/customers'}
        >
         <Typography
          sx={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}
          color="text.primary">  
          <Groups3 sx={{ fontSize: '2rem', mr: 0.5 }} />
          Customers
          </Typography> 
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem' }}
          color="inherit"
          to={'/purchases'}
        >
        <Typography
          sx={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}
          color="text.primary"
        >
          <Grain sx={{ fontSize: '2rem', mr: 0.5 }} />
          Purchases
        </Typography>
        </Link>
      </Breadcrumbs>
    </div>
  );
}
export default MenuPage;