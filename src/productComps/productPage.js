import React from 'react'
import SumComp from './sumComp'
import TableComp from '../mainComps/tableComps/tableComp'
const ProductPage = () => {
  return (
    <div style={{backgroundColor: '#0288d1', height: '600px'}}>
      <br/><br/>
        <SumComp/> <br/>
        <TableComp context={'products'}/>
    </div>
  )
}
export default ProductPage