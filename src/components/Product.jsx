import React from 'react'
import { useContext } from 'react';
import StateContext from '../context';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';



export default function Product(props) {
const { productData } = props
const [ value, dispatch ] = useContext(StateContext);


const _handleSubmit = (e, dispatch) => {
  e.preventDefault();
  const selectedProduct = {
    id: productData.id,
    productName: productData.productName,
    price: productData.price,
    image: productData.image
  }
  dispatch({
    type: "ADD_TO_CART",
    product: selectedProduct,
  })  
};

  return (
    <>
      <Grid item xs={12} sm={6} md={3} padding={2}> 
        <Card sx={{ maxWidth: 345 }} elevation={0} square={true}>
          <CardActionArea onClick= {(e) => _handleSubmit(e, dispatch)}>
           <CardMedia
          component="img"
          height="400"
          image={productData.image}
          alt={productData.productName}
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {productData.productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
</> 
  )

}





      // <img width='100px' src={productData.image} alt={productData.productName} />
      // <h3>{productData.productName}</h3>
      // <div>${productData.price}</div>
      // <div>
      // <button type='submit'>Add to Cart</button>
      // </div>