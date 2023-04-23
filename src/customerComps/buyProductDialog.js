import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import {generateId, getCurrentDate} from '../reducers/generateFunctions';

const BuyProductDialog = (props) => {
    const storeData = useSelector(state => state);
    const dispatch = useDispatch();
    const customersNames = storeData.customers.map(customer => ({ id: customer.id, name: (customer.fname + " " + customer.lname)}));
    const productNames = storeData.products.map(product => ({id: product.id, name: product.name}));
    const [chosenCustomer, setChosenCustomer] = React.useState({});
    const [chosenProduct, setChosenProduct] = React.useState({});

    const handlePurchase = () => {
        const obj = {id: generateId(), customerId: chosenCustomer.id,
            productId: chosenProduct.id, date: getCurrentDate()}
          dispatch({type: "ADD_PURCHASE", payload: obj});
         props.handleDialog();
         props.setSuccess(true); 
    }

  return (
    <div>
    <Dialog
    open={props.open}
    onClose={props.handleDialog}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description">
        <DialogTitle>Buy a product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To buy a product, please choose one of our products
            and identitify as one of our customers. That simple!
          </DialogContentText> <br/>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={customersNames}
            getOptionLabel={(option) => option.name}
            onChange={(event, value) => setChosenCustomer(value)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Customer"/>}
          /> <br/>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={productNames}
            getOptionLabel={(option) => option.name}
            onChange={(event, value) => setChosenProduct(value)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Product"/>}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleDialog}>Cancel</Button>
          <Button onClick={handlePurchase}>Buy</Button>
        </DialogActions>
    </Dialog>
    </div>
  )
}
export default React.memo(BuyProductDialog);