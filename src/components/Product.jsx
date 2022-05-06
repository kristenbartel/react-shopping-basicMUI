import React from 'react'
import { useContext } from 'react';
import StateContext from '../context';


export default function Product(props) {
const { productData } = props
const [ value, dispatch ] = useContext(StateContext);
// this is the global state brought into the comp

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
    <div>
      <form onSubmit={(e) => _handleSubmit(e, dispatch)}>
      <img width='100px' src={productData.image} alt={productData.productName} />
      <h3>{productData.productName}</h3>
      <div>${productData.price}</div>
      <div>
      <button type='submit'>Add to Cart</button>
      </div>
      </form>
    </div>
  )

}
