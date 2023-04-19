import React from 'react'
import EditProductComp from './editProductComp';
import TableComp from '../mainComps/tableComps/tableComp';
import AlertDialog from '../mainComps/deleteDialog';
import { useParams, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'


const EditProductPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const storeData = useSelector(state => state);

  const products = storeData.products;
  const product = products.find(product => product.id === id);
  
  const updateProduct = (obj) => {
    dispatch({type: "UPDATE_PRODUCT", payload: obj})
    navigate('/products', {replace: true})
      //return <Alert severity="success">Updated Successfully!</Alert>
  }
  const deleteProduct = () => {
    dispatch({type : "DELETE_PRODUCT", payload : product})
    dispatch({type: 'DELETE_PRODUCT_PURCHASES', payload: product.id})
    setOpen(false);
    navigate('/products', {replace: true})
    //return <Alert severity="success">Deleted Successfully!</Alert>
  }
  const handleOpen = () => {setOpen(true);}
  const handleClose = () => {setOpen(false);}
  return (
    <div style={{backgroundColor: '#0288d1', height: '600px'}}>
      <AlertDialog open={open} handleClose={handleClose} deleteProduct={deleteProduct}/>
      <br/>
      <EditProductComp updateProduct={updateProduct} handleOpen={handleOpen} product={product} context='products'/>
      <br/>
      <TableComp context={'purchases'} product={product}/>
    </div>
  )
}
export default EditProductPage;