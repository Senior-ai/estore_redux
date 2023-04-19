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

const EditCustomerForm = (props) => {
  const customer = props.customer;
  React.useEffect(() => {
    setNewCustomer(customer);
  }, []);
  const updateCustomer = props.updateCustomer;
  const [newCustomer, setNewCustomer] = React.useState({});
  return (
    <Box sx={{ width: 250, backgroundColor: '#1a237e'}}>
    <React.Fragment>
    <CardContent>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
    <TextField sx={{m:1, width: '250px', WebkitTextFillColor:'white'}}
        id="input-with-icon-textfield"
        label="Customer's First Name"
        defaultValue={customer.fname}
        onChange={e => setNewCustomer({...newCustomer, fname: e.target.value})}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DriveFileRenameOutlineIcon sx={{color:'white'}}/>
            </InputAdornment>
          ),
        }}
        variant="filled"
      />
    <TextField sx={{m:1, width: '250px', WebkitTextFillColor:'white'}}
        id="input-with-icon-textfield"
        label="Customer's Last Name"
        defaultValue={customer.lname}
        onChange={e => setNewCustomer({...newCustomer, lname: e.target.value})}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DriveFileRenameOutlineIcon sx={{color:'white'}}/>
            </InputAdornment>
          ),
        }}
        variant="filled"
      />
    <TextField sx={{m:1, WebkitTextFillColor:'white'}}
          id="filled-number"
          label="City"
          style={{width: '250px'}}
          type="text"
          defaultValue={customer.city}
          onChange={(e) => setNewCustomer({...newCustomer, city: e.target.value})}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
    </Box>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={()=>updateCustomer(newCustomer)} style={{WebkitTextFillColor:'white'}}>Update</Button>
      <Button size="small" onClick={props.handleOpen} style={{WebkitTextFillColor:'white'}}>Delete</Button>
    </CardActions>
  </React.Fragment>
  </Box>
  )
}

export default EditCustomerForm;