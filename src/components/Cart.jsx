import { Drawer, Box, Typography, Button } from "@mui/material";
import { useState } from 'react';
import CartList from './CartList';

function Cart() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    // const onAdd = (product) => {
    //     const doesExist = cartItems.find(x => x.id === product.id);
    //     if(doesExist){
    //         setCartItems(cartItems.map(x => x.id === product.id ? {...doesExist, qty: doesExist.qty + 1} : x));
    //     } else {
    //         setCartItems([...cartItems, {...product, qty: 1}])
    //     }
    // };

    return ( 
        <>
        <Button
            size='large'
            edge="start"
            color='inherit'
            aria-label='logo'
            onClick={() => setIsDrawerOpen(true)}
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
                    >Cart and Total
                    </Typography>
                   <CartList />
            </Box>
        </Drawer>
        </>
     );
}

export default Cart;