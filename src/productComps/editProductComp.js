import React from 'react'
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const EditProductComp = (props) => {
  const product = props.product;
  React.useEffect(() => {
    setNewProduct(product);
  }, []);
  const updateProduct = props.updateProduct;
  const [newProduct, setNewProduct] = React.useState({});
  return (
    <Box sx={{ width: 250, backgroundColor: '#1a237e'}}>
    <React.Fragment>
    <CardContent>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
    <TextField sx={{m:1, width: '250px', WebkitTextFillColor:'white'}}
        id="input-with-icon-textfield"
        label="Product Name"
        defaultValue={product.name}
        onChange={e => setNewProduct({...newProduct, name: e.target.value})}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DriveFileRenameOutlineIcon sx={{color:'white'}}/>
            </InputAdornment>
          ),
        }}
        variant="filled"
      />
    <FormControl sx={{ m: 1, WebkitTextFillColor:'white' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Price</InputLabel>
          <FilledInput type="number" defaultValue={product.price}
            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            id="filled-adornment-amount"
            style={{width: '200px'}}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
    </FormControl>
    <TextField sx={{m:1, WebkitTextFillColor:'white'}}
          id="filled-number"
          label="Amount"
          style={{width: '250px'}}
          type="number"
          defaultValue={product.quantity}
          onChange={(e) => setNewProduct({...newProduct, quantity: e.target.value})}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
    </Box>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={()=>updateProduct(newProduct)} style={{WebkitTextFillColor:'white'}}>Update</Button>
      <Button size="small" onClick={props.handleOpen} style={{WebkitTextFillColor:'white'}}>Delete</Button>
    </CardActions>
  </React.Fragment>
  </Box>
  )
}

export default EditProductComp;