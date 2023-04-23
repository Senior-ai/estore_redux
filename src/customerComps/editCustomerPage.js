import React from 'react'
import EditCustomerForm from './editCustomerForm';
import TableComp from '../mainComps/tableComps/tableComp';
import AlertDialog from '../mainComps/deleteDialog';
import { useParams, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'

const EditCustomerPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const storeData = useSelector(state => state);
  
  const customer = storeData.customers.find(x => x.id === id);
  const customerPurchases = storeData.purchases
  .filter(purchase => purchase.customerId === customer.id)
  .map(purchase => {
    const product = storeData.products.find(product => product.id === purchase.productId);
    return {
      ...purchase,
      productName: product ? product.name : '', 
      purchaseDate: purchase.date
    };
  });
  const customerWithPurchases = {
    ...customer,
    purchases: customerPurchases
  };
  
  const [data, setData] = React.useState(customerWithPurchases);
  const updateCustomer = () => {
    dispatch({type: "UPDATE_CUSTOMER", payload: customer})
    navigate('/customers', {replace: true})
  }
  const deleteObject = () => {
    console.log(customer);
    dispatch({type : "DELETE_CUSTOMER", payload : customer})
    dispatch({type: 'DELETE_CUSTOMER_PURCHASES', payload: customer.id})
    setOpen(false);
    navigate('/customers', {replace: true})
  }
  const handleOpen = () => {setOpen(true);}
  const handleClose = () => {setOpen(false);}
  return (
    <div style={{backgroundColor: '#0288d1', height: '600px'}}>
      <AlertDialog open={open} handleClose={handleClose} deleteObject={deleteObject} context='customer'/>
      <br/>
      <EditCustomerForm updateCustomer={updateCustomer} handleOpen={handleOpen} customer={customer} context={'customers'}/>
      <br/>
      <TableComp context={'editCustomers'} customer={customer} data={data}/>
    </div>
  )
}
export default EditCustomerPage