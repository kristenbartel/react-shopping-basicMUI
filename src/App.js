import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import data from './data';
import { StateProvider } from './context';
import { useReducer } from 'react';

export default function App() {

const initialState = []
const reducer = (state, action) => {
  const {product} = action;
  switch (action.type) {
  case "ADD_TO_CART":
    return [
      ...state,
        {
        id: product.id,
        productName: product.productName,
        price: product.price,
        image: product.image
       }, 
      ];
    default: return state;
}};

const { products } = data

  return (
  <div>
  <StateProvider value={useReducer(reducer, initialState)}>
      <NavBar />
      <Main productData={products} />
  </StateProvider>
  </div>
  );
}


