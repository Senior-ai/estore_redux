import React from 'react'
import Button from '@mui/material/Button';
import TableComp from '../mainComps/tableComps/tableComp'
import Alert from '@mui/material/Alert';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import BuyProductDialog from './buyProductDialog';

const CustomersPage = () => {
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const handleDialog = () => {setOpen(!open);}
  
  React.useEffect(() => {
    if (success) {
      const timeoutId = setTimeout(() => {
        setSuccess(false);
      }, 3000);
      return () => {
        clearTimeout(timeoutId);
      }
    }
  }, [success]);
  return (
    <div style={{backgroundColor: '#0288d1', height: '600px'}}>
        <BuyProductDialog open={open} setSuccess={setSuccess} handleDialog={handleDialog}></BuyProductDialog>
        <br/><br/>
        <ColorButton variant="contained" size="large" onClick={handleDialog}>Buy Product</ColorButton>
        {success? (<Alert severity="success">This is a success alert — check it out!</Alert>) : ('')}
        <br/><br/>
        <TableComp context={'customers'} success={success}/>
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