import React from 'react'
import {useSelector} from 'react-redux'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const SumComp = () => {
    const storeData = useSelector(state => state);
    const loadSum = () => {
        console.log(storeData.purchases);
        const productIds = storeData.purchases.map(purchase => purchase.productId);
        const products = productIds.map(productId => 
          storeData.products.find(product => product.id === productId));
        const productPrices = products.map(x => parseInt(x.price));
        const sum = productPrices.reduce((acc, curr) => acc + curr, 0);
        return sum;
    }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {loadSum().toLocaleString()}$  
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Worth of sold products and happy customers!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
export default SumComp;