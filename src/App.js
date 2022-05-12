import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import data from './data';
import { StateProvider } from './context';
import { useReducer } from 'react';
import { BrowserRouter, Routes, Route, UNSAFE_RouteContext } from 'react-router-dom';
import About from './components/About';
import { Fragment } from 'react';
import Login from './components/Login';
import Splash from './components/Splash';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles'
import Checkout from './components/checkout/Checkout';

// Theme
const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat Alternates',
      fontWeightLight: 400,
      fontWeightLight: 500,
      fontWeightLight: 600,
      fontWeightLight: 700
    
  }
})

export default function App() {
// Data
const { products } = data
// Reducer 
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
// Component Tree
  return (
  <ThemeProvider theme={theme}>
  <StateProvider value={useReducer(reducer, initialState)}>
  <BrowserRouter>
  <Routes>
  <Route path='/'
          element = {
            <Fragment>
              {/* <Splash > */}
              <NavBar />
              <Main productData={products} />
              {/* </Splash> */}
            </Fragment>
          }
        />
    <Route path='about' element={<About />} />
    <Route path='login' element={<Login />} />
    <Route path='checkout' element={<Checkout />}/>
  </Routes>
  </BrowserRouter>
  </StateProvider>
  </ThemeProvider>
  );
}

