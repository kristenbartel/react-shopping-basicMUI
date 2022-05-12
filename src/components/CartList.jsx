import * as React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StateContext from "../context";

// Material Imports
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Slide from "@mui/material/Slide";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

// Dialog Transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CartList() {
  const [state, dispatch] = useContext(StateContext);

  // Sum Cart Items
  const cartItems = state.map((i) => i.qty * i.price, 0);

  const initialValue = 0;
  const sumWithInitial = cartItems.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  // Delete handler
  const _handleDelete = (itemID) => {
    dispatch({
      type: "DELETE_FROM_CART",
      product: itemID,
    });
  };

  // Dialog Handler
  const [open, setOpen] = React.useState(false);
  //   insert props here
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Checkout Navigator
  const navigate = useNavigate();
  const goToPaymentPage = () => navigate("/Checkout");

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
        {state.map((i) => (
          <ListItem key={i.id}>
            <ListItemAvatar>
              <Avatar>
                <img src={i.image} alt={i.productName} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={i.productName} secondary={`$${i.price}`} />
            <ListItemText>
              <Button onClick={handleClickOpen}>
                <RemoveRedEyeIcon
                  sx={{ fontSize: 30 }}
                  style={{ color: "grey" }}
                ></RemoveRedEyeIcon>
              </Button>
            </ListItemText>
            <ListItemText primary="qty" secondary={i.qty}>
              {" "}
            </ListItemText>
            <IconButton
              aria-label="delete"
              size="small"
              onClick={() => _handleDelete(i.id)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
              <Grid padding={2} ml={8} mt={8}>
                <List margin={4}>
                  <ListItem key={i.id}>
                    <img src={i.image} alt={i.productName} width={500} />
                    <ListItemText></ListItemText>
                    <ListItemText
                      padding={8}
                      primary={i.productName}
                      secondary={`$${i.price}`}
                    />
                    <ListItemText></ListItemText>
                    <ListItemText>
                      <Button autoFocus color="inherit" onClick={handleClose}>
                        <CloseIcon />
                      </Button>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Description:"
                      secondary={i.desc}
                    ></ListItemText>
                  </ListItem>
                </List>
              </Grid>
            </Dialog>
          </ListItem>
        ))}
        <>
          <ListItem>
            <MonetizationOnOutlinedIcon sx={{ fontSize: 45, marginRight: 2 }} />
            <ListItemText
              primary="TOTAL"
              secondary={`$${sumWithInitial}`}
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
        <Button
          onClick={goToPaymentPage}
          style={{ color: "black", fontSize: 20 }}
        >
          Checkout
        </Button>
      </Box>
    </>
  );
}
