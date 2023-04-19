import React from 'react'
import TableComp from '../mainComps/tableComps/tableComp'
const CustomersPage = () => {
  return (
    <div style={{backgroundColor: '#0288d1', height: '600px'}}>
        <br/><br/>
        <TableComp context={'customers'}/>
    </div>
  )
}
export default CustomersPage;