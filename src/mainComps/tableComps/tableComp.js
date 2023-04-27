import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DetailedRow from './detailedRow';
import {useSelector } from 'react-redux'

export const TableComp = (props) => {
  const [rows, setRows] = React.useState([]);
  const [columns, setColumns] = React.useState([])
  const storeData = useSelector(state => state);

  React.useEffect(() => {
  if (props.context === 'products') {
   setRows(storeData.products);
   setColumns(['Name', 'Price', 'Quantity']); 
  }
  else if (props.context === 'customers')
  {
    setRows(props.data);
    setColumns(['Name','Purchased Products','Purchase Dates'])
  }
  else if (props.context === 'purchases') {
    const purchases = storeData.purchases.filter(purchase => purchase.productId === props.product.id); 
    const customerIds = purchases.map(purchase => {return {id: purchase.customerId, date: purchase.date}});
    
    const customers = customerIds.map(customerId => {
      const customer = storeData.customers.find(customer => customer.id === customerId.id);
      return {...customer, date: customerId.date};
    });
    setRows(customers);
    setColumns(['Name', 'City', 'Date'])
  }
  else if (props.context === 'allPurchases') {
    setRows(props.data);
    setColumns(['Name', 'Product', 'Date'])
  }
  else if (props.context === 'editCustomers')
  {
    setRows(props.data.purchases);
    setColumns(['Name','Purchased Product','Purchase Date']);
  }  
  }, [props.context, props.data]);

  return (
    
    <div style={{height: '250px'}}>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>{columns[0]}</TableCell>
            <TableCell align="center">{columns[1]}</TableCell>
            <TableCell align="right">{columns[2]}&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => <DetailedRow key={row.id} context={props.context} row={row} />
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
export default React.memo(TableComp);