import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useContext } from "react";
import StateContext from "../context";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function CartList() {
  const [state, dispatch] = useContext(StateContext);
  console.log(state);

  // Sum Cart Items
  const cartItems = state.map((i) => i.qty * i.price, 0);
  console.log(cartItems);
  const initialValue = 0;
  const sumWithInitial = cartItems.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  console.log(sumWithInitial);

  // Delete handler
  const _handleDelete = (itemID) => {
    dispatch({
      type: "DELETE_FROM_CART",
      product: itemID,
    });
  };

  // Checkout Navigator
  const navigate = useNavigate();
  const goToPaymentPage = () => navigate("/Checkout");

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {state.map((i) => (
          <ListItem key={i.id}>
            <ListItemAvatar>
              <Avatar>
                <img src={i.image} alt={i.productName} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={i.productName} secondary={`$${i.price}`} />
            <p>{i.qty}</p>
            <IconButton
              aria-label="delete"
              size="small"
              onClick={() => _handleDelete(i.id)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </ListItem>
        ))}
        <>
          <ListItem>
            <ListItemText
              primary="total"
              secondary={sumWithInitial}
            ></ListItemText>
          </ListItem>
        </>
      </List>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <Button onClick={goToPaymentPage}>Checkout</Button>
      </Box>
    </>
  );
}
