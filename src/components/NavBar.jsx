import { AppBar, Stack, Typography, Button } from '@mui/material';
import  Toolbar from '@mui/material/Toolbar';
import Cart from './Cart';
import SideBar from './SideBar';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import styled from 'styled-components';



function NavBar() {
    
    return ( 
        <AppBar position= 'static' elevation={0} style={{ background: 'white' }}>
        <Toolbar className="AppBar">
        <a href="/" >
            <HomeIcon sx={{ fontSize: 40 }} style={{color: 'black'}} />
          </a>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1}} style={{color: 'black'}}>
            SHOPPING
        </Typography>
            <Stack direction='row' spacing={2}> 
                <a href='/about' className='navMenu' style={{ textDecoration: 'none'}}>
              <Button className='navMenu' style={{color: 'black'}} >about</Button>
             </a> 
                <a href='/login' className='navMenu' style={{ textDecoration: 'none' }}>
              <Button className='navMenu' style={{color: 'black'}}>login</Button>
             </a> 
             <ShoppingBasketIcon sx={{ fontSize: 40 }} style={{color: 'black'}} />
                <Cart />
            </Stack>
        </Toolbar>
        </AppBar>
     );
}

export default NavBar;


