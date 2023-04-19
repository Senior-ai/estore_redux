import React from 'react'
import EditCustomerForm from './editCustomerForm';
import TableComp from '../mainComps/tableComps/tableComp';
import AlertDialog from '../mainComps/deleteDialog';
import { useParams, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'

const EditCustomerPage = () => {
  const {id} = useParams();
  console.log(id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const storeData = useSelector(state => state);

  const customers = storeData.customers;
  const customer = customers.find(x => x.id === id);
    console.log(customer);
  const updateCustomer = (obj) => {
    dispatch({type: "UPDATE_CUSTOMER", payload: obj})
    navigate('/customers', {replace: true})
      //return <Alert severity="success">Updated Successfully!</Alert>
  }
  const deleteCustomer = () => {
    dispatch({type : "DELETE_CUSTOMER", payload : customer})
    dispatch({type: 'DELETE_CUSTOMER_PURCHASES', payload: customer.id})
    setOpen(false);
    navigate('/customers', {replace: true})
    //return <Alert severity="success">Deleted Successfully!</Alert>
  }
  const handleOpen = () => {setOpen(true);}
  const handleClose = () => {setOpen(false);}
  console.log(customer);
  return (
    <div style={{backgroundColor: '#0288d1', height: '600px'}}>
      <AlertDialog open={open} handleClose={handleClose} deleteCustomer={deleteCustomer}/>
      <br/>
      <EditCustomerForm updateCustomer={updateCustomer} handleOpen={handleOpen} customer={customer} context={'customers'}/>
      <br/>
      <TableComp context={'customers'} customer={customer}/>
    </div>
  )
}
export default EditCustomerPage