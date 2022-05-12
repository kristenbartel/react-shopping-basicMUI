import { Drawer, Box, Typography, Button } from "@mui/material";
import { useState } from 'react';
import CartList from './CartList';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Cart() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return ( 
        <>
        <Button
            size='large'
            edge="start"
            color='inherit'
            aria-label='logo'
            onClick={() => setIsDrawerOpen(true)}
            style={{color: 'black'}}
            > <ShoppingBasketIcon sx={{ fontSize: 40 }} style={{color: 'black'}} />
        </Button>  
        <Drawer 
            anchor='right' 
            open={isDrawerOpen} 
            onClose={() => setIsDrawerOpen(false)}>
            <Box 
                p={2} width='500px' 
                textAlign='center' 
                role='presentation'>
                    <Typography 
                    variant='h6' 
                    component='div'
                    margin={5}
                    style={{color: 'black', fontSize: 40}}
                    > CART
                    </Typography>
                   <CartList />
            </Box>
        </Drawer>
        </>
     );
}

export default Cart;