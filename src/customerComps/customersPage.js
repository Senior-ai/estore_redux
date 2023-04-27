import React from 'react'
import Button from '@mui/material/Button';
import TableComp from '../mainComps/tableComps/tableComp'
import Alert from '@mui/material/Alert';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import BuyProductDialog from './buyProductDialog';
import {useSelector } from 'react-redux'

const CustomersPage = () => {
  const storeData = useSelector(state => state);
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  
  React.useEffect(() => {
    customerData();   
  }, [storeData.purchases]);

  const handleDialog = () => {setOpen(!open);}

  const customerData = () => {
    const customers = storeData.customers.map(customer => {
      const purchases = storeData.purchases.filter(purchase=> purchase.customerId === customer.id);
      const customerWithPurchases = {
        ...customer,
        purchases: purchases.map(purchase => {
          const product = storeData.products.find(product => product.id === purchase.productId);
          return {
            ...purchase,
            product: product
          };
        })
      };
      return customerWithPurchases});
     
    return customers;
  }
  const [data, setData] = React.useState(customerData);
    React.useEffect(() => {
        customerData();   
      }, [storeData.purchases]);

      React.useEffect(() => {
        if (success) {
          const timeoutId = setTimeout(() => {
            setSuccess(false);
          }, 3000);
          return () => {
            clearTimeout(timeoutId);
            setData(customerData());
          }
        }
      }, [success]);
  return (
    <div key={data} style={{backgroundColor: '#0288d1', height: '600px'}}>
        <BuyProductDialog open={open} setSuccess={setSuccess} handleDialog={handleDialog}></BuyProductDialog>
        <br/><br/>
        <ColorButton variant="contained" size="large" onClick={handleDialog}>Buy Product</ColorButton>
        {success? (<Alert severity="success">This is a success alert — check it out!</Alert>) : ('')}
        <br/><br/>
        <TableComp context={'customers'} key={data} data={data}/>
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