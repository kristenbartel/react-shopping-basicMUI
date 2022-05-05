import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useContext } from 'react';
import StateContext from '../context';
// import { useState } from 'react';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import ImageIcon from '@mui/icons-material/Image';

export default function CartList() {
const [ state, dispatch ] = useContext(StateContext);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
       {state.map((i) => (
             <ListItem key={i.id}>
                {i.productName}
                {i.price}
            
            <img src={i.image} alt={i.productName} />
             </ListItem>    
       ))
       } 
    </List>
  );
}


// {/* <ListItemAvatar>
// <Avatar>
// {/* can the image icon contain a product image from props or database? */}
// <ImageIcon />
// </Avatar>
// </ListItemAvatar>
// {/* Can the ListItemText hold data from props or database? */}
// <ListItemText primary='Product' secondary="Product Description" /> */}
