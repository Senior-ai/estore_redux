import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import {useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {generateId, getCurrentDate} from '../reducers/generateFunctions';
const PurchaseAdder = () => {
  const storeData = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [chosenProduct, setChosenProduct] = useState({});
  const products = storeData.products;
  const {customerId} = useLocation().state || {};
  const customer = storeData.customers.find(customer => customer.id === customerId);

  const handlePurchase = () => {
    const obj = {id: generateId(), customerId: customerId,
      productId: chosenProduct, date: getCurrentDate()}
      console.log(obj);
    dispatch({type: "ADD_PURCHASE", payload: obj})
    navigate('/products', {replace: true})
  }
  return (
    <div style={{backgroundColor: '#283593',height: '550px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div style={{alignItems: 'center'}}>
        <center>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={products}
          onChange={(e) => setChosenProduct(e.target.value)}
          getOptionLabel={(product) => product.name}
          sx={{ width: 300, padding: '12px' }}
          renderInput={(params) => <TextField {...params} label="Choose a product" />}
        /></center>
        <p style={{marginTop: '12px',  fontWeight: 'bold'}}>Press the "Add" button to add the selected product
         as a purchase to {customer.fname + ' ' + customer.lname}</p> <br/>
         <Button variant="contained" onClick={handlePurchase}>Add new purchase</Button>
      </div>
    </div>
  )
}
export default PurchaseAdder