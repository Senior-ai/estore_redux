import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import {useSelector } from 'react-redux'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const PurchasedComp = (props) => {
  const storeData = useSelector(state => state);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    if (props.context === 'products')
    {
      const purchases = storeData.purchases.filter(purchase => parseInt(purchase.productId) === parseInt(props.row.id))
      setData(purchases);
    }
  }, [props.context]);

  return (
    <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Purchase History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    {/* <TableCell align="right">Price ($)</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((obj) => (
                    <TableRow key={obj.date}>
                      <TableCell component="th" scope="row">
                        {obj.date}
                      </TableCell>
                      <TableCell><Link to={`/${props.context}/${obj.id}`}>{storeData.customers.filter(customer => customer.id === obj.customerId)
                      .map(customer => customer.fname +' '+ customer.lname)}</Link></TableCell>
                      <TableCell>
                      <Link to="/purchases/addNew" state={obj}><Button variant="contained" endIcon={<SendIcon />}>Add</Button></Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
  )
}
export default PurchasedComp