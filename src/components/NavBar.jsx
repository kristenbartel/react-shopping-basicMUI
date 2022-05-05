import { AppBar, Stack, Typography, Button } from '@mui/material';
import  Toolbar from '@mui/material/Toolbar';
import Cart from './Cart';
import SideBar from './SideBar';

function NavBar() {
    
    return ( 
        <AppBar position= 'static'>
        <Toolbar className="AppBar">
        <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
            SAMPLE TYPE
        </Typography>
            <Stack direction='row' spacing={2}> 
                <SideBar></SideBar>
                <Button color='inherit'>About</Button>
                <Button color='inherit'>Login</Button>
                <Cart />
            </Stack>
        </Toolbar>
        </AppBar>
     );
}

export default NavBar;