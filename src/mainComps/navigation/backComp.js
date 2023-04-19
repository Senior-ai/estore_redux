import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
const BackComp = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  }
  return (
    <Tabs value={0}>
         <Tab icon={<ArrowBackIcon />} onClick={handleBackClick} iconPosition="start" label="Back" />
    </Tabs>
  )
}
export default BackComp;