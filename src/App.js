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
    {const doesExist = state.find(i => i.id === product.id)
    return doesExist ?
      (state.map(i => i.id === product.id ? {...i, qty: i.qty + 1} : i))
      :
      [
      ...state,
        {
        id: product.id,
        productName: product.productName,
        price: product.price,
        image: product.image,
        qty: 1
       }, 
      ];
    };
  case "DELETE_FROM_CART":
    console.log(product)
      return state.map(i => i.id === product ? {...i, qty:(i.qty - 1)} : i ).filter(x => x.qty > 0)
    default: return state;
}};

// Do I need this to pass data props to the NavBar
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


