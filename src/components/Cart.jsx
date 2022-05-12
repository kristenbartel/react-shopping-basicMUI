import { Drawer, Box, Typography, Button } from "@mui/material";
import { useState } from 'react';
import CartList from './CartList';

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
            >CART
        </Button>  
        <Drawer 
            anchor='right' 
            open={isDrawerOpen} 
            onClose={() => setIsDrawerOpen(false)}>
            <Box 
                p={2} width='250px' 
                textAlign='center' 
                role='presentation'>
                    <Typography 
                    variant='h6' 
                    component='div'
                    > CART
                    </Typography>
                   <CartList />
            </Box>
        </Drawer>
        </>
     );
}

export default Cart;