import React from 'react'
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PurchasedComp from '../../productComps/purchasedComp';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const DetailedRow = (props) => {
const { row } = props;
const storeData = useSelector(state => state);
const location = useLocation();
const locationContext = location.pathname || '';
const [open, setOpen] = useState(false);
const [cells, setCells] = useState([]);
const [context, setContext] = useState('');

useEffect(() => {checkContext();}, [row, props.context]);

    const checkContext = () => {
        if (props.context === 'products') {
            setCells([row.name, row.price, row.quantity]);
            setContext(props.context);
        }
        else if (props.context === 'purchases') {
            setCells([(row.fname + ' ' + row.lname), row.city, row.date]);
            setContext('customers');
        }
        else if (props.context === 'customers') {
            const products = row.purchases.map(purchase => purchase.product);
            const purchaseDates = row.purchases.map(purchase => purchase.date);
            setCells([(row.fname + ' ' + row.lname), products ,purchaseDates]);
            setContext('customers')
        }
        else if (props.context === 'allPurchases')
        {
            setCells([row.customerName, row.productName, row.date]);
            setContext('purchases');
        }
        else if (props.context === 'editCustomers')
        {const customer = storeData.customers.find(customer => customer.id === row.customerId)
            setCells([(customer.fname +" "+customer.lname), row.productName, row.purchaseDate])
        setContext('editCustomers')}
}       
  return (
        <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
            <IconButton aria-label="expand row"
                size="small" onClick={() => setOpen(!open)}>
                {props.context === 'products'? (open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />) : ''}
            </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
            {context === 'customers' ? (
            <Link to={`/customers/${row.id}`}>{cells[0]}</Link>) : (
            context === 'purchases'? (<Link to={`/customers/${row.customerId}`}>{cells[0]}</Link>) : 
            (context === 'editCustomers'? (cells[0]) :
             (<Link to={`/${context}/${row.id}`}>{cells[0]}</Link>)))}
            </TableCell>
            <TableCell align="center">
            {context === 'customers' ? ( locationContext.includes('/products/')? (cells[1]) :
             (cells[1].map(product => {
             const productId = row.purchases.find(purchase => purchase.product.name === product.name)?.product.id;
             return (<><Link to={`/products/${productId}`} key={productId}>{product.name}</Link>, </>);
                }))) : (context === 'purchases'? (<Link to={`/products/${row.productId}`}>{cells[1]}</Link>)
                 :(context === 'editCustomers'? <Link to={`/products/${row.productId}`}>{cells[1]}</Link>:cells[1]))}
            </TableCell>
            <TableCell align="right">
            {context === 'editCustomers'? (cells[2]) : (cells[2] && locationContext.includes('/customer')? 
            (cells[2].map(date => {const tempDate = date.toString();
                return(<div>{tempDate}, </div>)}))
            : (cells[2]))}
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <PurchasedComp key={row.id + 1} row={row} context={props.context}/>
            </Collapse>
            </TableCell>
        </TableRow>
        </React.Fragment>
    );
    }

export default React.memo(DetailedRow);