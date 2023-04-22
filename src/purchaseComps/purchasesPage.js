import React, {useEffect, useState} from 'react'
import FilterTableComp from './filterTableComp';
import TableComp from '../mainComps/tableComps/tableComp';
import {useSelector } from 'react-redux'

const PurchasesPage = () => {
  const storeData = useSelector(state => state);
  const [data, setData] = useState([]);
  useEffect(() => {filterTable();}, []);
  
  const filterTable = () => {
    const purchases = storeData.purchases;

    setData(purchases);
  }
  return (
    <div style={{backgroundColor: '#0288d1', height: '600px'}}>
      <FilterTableComp filterTable={filterTable}/>
      <TableComp context={'allPurchases'} data={data}></TableComp>
    </div>
  )
}
export default PurchasesPage;