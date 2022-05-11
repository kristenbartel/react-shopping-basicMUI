import { AppBar, Stack, Typography, Button } from '@mui/material';
import  Toolbar from '@mui/material/Toolbar';
import Cart from './Cart';
import SideBar from './SideBar';
import HomeIcon from '@mui/icons-material/Home';


function NavBar() {
    
    return ( 
        <AppBar position= 'static'>
        <Toolbar className="AppBar">
        <a href="/" >
            <HomeIcon sx={{ fontSize: 40 }} color="action" />
          </a>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
            SAMPLE TYPE
        </Typography>
            <Stack direction='row' spacing={2}> 
                <SideBar></SideBar>
                <a href='/about' className='navMenu'>
              <Button className='navMenu'>about</Button>
             </a> 
                <a href='/login' className='navMenu'>
              <Button className='navMenu'>login</Button>
             </a> 
                <Cart />
            </Stack>
        </Toolbar>
        </AppBar>
     );
}

export default NavBar;


