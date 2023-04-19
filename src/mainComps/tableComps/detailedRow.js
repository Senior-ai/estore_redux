import React from 'react'
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PurchasedComp from '../../productComps/purchasedComp';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const DetailedRow = (props) => {
const { row } = props;
const location = useLocation();
const locationContext = location.state || '';
const [open, setOpen] = React.useState(false);
const [cells, setCells] = React.useState([]);
const [context, setContext] = React.useState('');
useEffect(() => {
    if (props.context === 'products') {
        setCells([row.name, row.price, row.quantity]);
        setContext('products');
    }
    else if (props.context === 'purchases') {
        setCells([(row.fname + ' ' + row.lname), row.city, row.date]);
        setContext('customers');
    }
    else if (props.context === 'customers') {
        const products = row.purchases.map(purchase => purchase.product.name);
        const purchaseDates = row.purchases.map(purchase => purchase.date);
        setCells([(row.fname + ' ' + row.lname), products,purchaseDates]);
        if (locationContext === 'customers2')
            {setContext('customers2');}
        else
            setContext('customers');
    }
}, [props.context]);

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
            <Link state={'customers2'} to={`/${context}/${row.id}`}>{cells[0]}</Link>) : (
            context === 'customers2' ? (cells[0]) : (
            <Link to={`/${context}/${row.id}`}>{cells[0]}</Link>))}
            </TableCell>
            <TableCell align="center">{cells[1]}</TableCell>
            <TableCell align="right">{cells[2]}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <PurchasedComp key={row.id} row={row} context={props.context}/>
            </Collapse>
            </TableCell>
        </TableRow>
        </React.Fragment>
    );
    }

export default DetailedRow