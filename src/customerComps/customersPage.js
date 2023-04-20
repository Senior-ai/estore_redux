import React from 'react'
import Button from '@mui/material/Button';
import TableComp from '../mainComps/tableComps/tableComp'
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import BuyProductDialog from './buyProductDialog';

const CustomersPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleDialog = () => {setOpen(!open);}
  return (
    <div style={{backgroundColor: '#0288d1', height: '600px'}}>
        <BuyProductDialog open={open} handleDialog={handleDialog}></BuyProductDialog>
        <br/><br/>
        <ColorButton variant="contained" size="large" onClick={handleDialog}>Buy Product</ColorButton>
        <br/><br/>
        <TableComp context={'customers'}/>
    </div>
  )
}

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));
export default CustomersPage;