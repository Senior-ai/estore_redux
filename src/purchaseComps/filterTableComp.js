import React from 'react'
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import  Button  from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const FilterTableComp = (props) => {
    const storeData = useSelector(state => state);
    const customersNames = storeData.customers.map(customer => ({ id: customer.id, name: (customer.fname + " " + customer.lname)}));
    const productNames = storeData.products.map(product => ({id: product.id, name: product.name})); 
    const [chosenProduct, setChosenProduct] = React.useState({});
    const [chosenCustomer, setChosenCustomer] = React.useState({});
    return (
    <Box sx={{backgroundColor: '#1a237e', padding: '16px', display: 'flex',alignItems: 'center'}}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={productNames}
            getOptionLabel={(option) => option.name}
            onChange={(event, value) => setChosenProduct(value)}
            sx={{ width: 300, marginLeft: '16px',
                '& .MuiInputBase-input': {
                    color: 'white', // change the text color
                  },
                  '& .MuiAutocomplete-inputRoot': {
                    backgroundColor: '#212c9e', // change the background color
                  },
             }}
             inputlabelprops={{
                style: {color: 'white',},
              }} 
            renderInput={(params) => <TextField {...params} label="Product"/>}
        />
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={customersNames}
            getOptionLabel={(option) => option.name}
            onChange={(event, value) => setChosenCustomer(value)}
            sx={{ width: 300, marginLeft: '16px',
                '& .MuiInputBase-input': {
                    color: 'white', // change the text color
                  },
                  '& .MuiAutocomplete-inputRoot': {
                    backgroundColor: '#212c9e',},
                }}
             inputlabelprops={{style: {color: 'white'}}} 
            renderInput={(params) => <TextField {...params} label="Customer"/>}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Purchase's date" disableFuture format='DD/MM/YYYY'
         sx={{backgroundColor: '#212c9e', borderRadius: '4px',
          marginBottom: '6px', marginLeft: '16px'}} />
      </DemoContainer>
    </LocalizationProvider>
    <Button onClick={props.filterTable} variant="outlined" sx={{marginLeft: '16px'}}>Search</Button>
    </Box>
  )
}
export default FilterTableComp