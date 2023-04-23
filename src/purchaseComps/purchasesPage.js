import React, {useState} from 'react'
import FilterTableComp from './filterTableComp';
import TableComp from '../mainComps/tableComps/tableComp';
import {useSelector } from 'react-redux'

const PurchasesPage = () => {
  const storeData = useSelector(state => state);
  const [chosenProduct, setChosenProduct] = React.useState(null);
  const [chosenCustomer, setChosenCustomer] = React.useState(null);
  var [chosenDate, setChosenDate] = React.useState(null); //var cuz it changes when it becomes Invalid

  const detailedPurchases = storeData.purchases.map(purchase => {
    const product = storeData.products.find(product => product.id === purchase.productId);
    const customer = storeData.customers.find(customer => customer.id === purchase.customerId);
    return {
      ...purchase,
      productName: product ? product.name : '',
      customerName: customer ? (customer.fname + " " + customer.lname) : ''
    };
  });

  const [data, setData] = useState(detailedPurchases);

  const filterTable = () => {
    if (chosenDate === 'Invalid Date')
    {chosenDate = ''}
    const filteredPurchases = detailedPurchases.filter(purchase => {
    if (chosenProduct && chosenProduct.id && purchase.productId !== chosenProduct.id) {
      return false;
    }
    if (chosenCustomer && chosenCustomer.id && purchase.customerId !== chosenCustomer.id) {
      return false;
    }
    if (chosenDate && purchase.date !== chosenDate) {
      return false;
    }
    return true;
  });
  if (!chosenDate && !chosenCustomer && !chosenProduct)
  {
    setData(detailedPurchases)
  }
  else
    setData(filteredPurchases);
}

  return (
    <div style={{backgroundColor: '#0288d1', height: '600px'}}>
      <FilterTableComp chosenProduct={chosenProduct}
        chosenCustomer={chosenCustomer}
        chosenDate={chosenDate}
        setChosenProduct={setChosenProduct}
        setChosenCustomer={setChosenCustomer}
        setChosenDate={setChosenDate}
        filterTable={filterTable}/>
      <TableComp context='allPurchases' key={data} data={data}></TableComp>
    </div>
  )
}
export default PurchasesPage;