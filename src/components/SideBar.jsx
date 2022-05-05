import { Drawer, Box, Typography, IconButton, Button } from "@mui/material";
import { useState } from 'react';
import SideBarSearch from "./SideBarSearch";


function SideBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return ( 
        <>
        <Button
            size='large'
            edge="start"
            color='inherit'
            aria-label='logo'
            onClick={() => setIsDrawerOpen(true)}
            >Products
        </Button>  
        <Drawer 
            anchor='left' 
            open={isDrawerOpen} 
            onClose={() => setIsDrawerOpen(false)}>
                <Box 
                p={2} 
                width='250px' 
                textAlign='center' 
                role='presentation'>
                    <Typography 
                        variant='h6' 
                        component='div'
                        >Products
                    </Typography>
                    <SideBarSearch />
                </Box>
        </Drawer>
        </>
     );
}

export default SideBar;