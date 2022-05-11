import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import data from './data';
import { StateProvider } from './context';
import { useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import { Fragment } from 'react';
import Login from './components/Login';
import Splash from './components/Splash';


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

const { products } = data
  return (
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
  </Routes>
  </BrowserRouter>
  </StateProvider>
  );
}

/* <BrowserRouter>
      <Routes>
        <Route path=‘/’
          element = {
            <Fragment>
              <Nav />
              <img src=“background.jpg” alt=“Logo” className=‘background’ />
              <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} countCartItems={cartItems.length} Checkout={Checkout} />
              <Main products={products} onAdd={onAdd}></Main>
              <Copyright />
            </Fragment>
          }
        />
        <Route path=‘about’ element={<About />} />
        <Route path=‘/login’ element={<SignInSide />} />
        <Route path=‘/signup’ element={<SignUp />} />
        {/* <Route path=‘/SeeCode’ element={<SeeCode />} /> */
    //   </Routes>
    // </BrowserRouter> */}


