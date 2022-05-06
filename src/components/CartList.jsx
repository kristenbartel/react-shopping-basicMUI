import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useContext } from 'react';
import StateContext from '../context';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const buttons = [
  <Button key="one">Save</Button>,
  <Button key="two">Checkout</Button>,
];

export default function CartList() {
const [ state, dispatch ] = useContext(StateContext);

  return (
      <>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
       {state.map((i) => (
             <ListItem key={i.id}>
                <ListItemAvatar>
                <Avatar>
                <img src={i.image} alt={i.productName} />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary= {i.productName} secondary={`$${i.price}`} />
                <p>{i.qty}</p>
                <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
                </IconButton>
             </ListItem>    
       ))
       }
    </List>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup color="secondary" aria-label="medium secondary button group">
        {buttons}
      </ButtonGroup>
    </Box>
    </>
  );
}


// const onAdd = (product) => {
//     const doesExist = state.find(i => i.id === product.id);
//     if(doesExist){
//         setState(state.map(i => i.id === product.id ? {...doesExist, qty: doesExist.qty + 1} : i));
//     } else {
//         setState([...state, {...product, qty: 1}])
//     }
// };




