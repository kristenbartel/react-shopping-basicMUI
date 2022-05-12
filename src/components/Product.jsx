import React from "react";
import { useContext } from "react";
import StateContext from "../context";

// Material
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Slide from "@mui/material/Slide";

// Material Icons
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

// Dialog Transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Product(props) {
  const { productData } = props;
  const [value, dispatch] = useContext(StateContext);
  // Add to Cart Handler
  const _handleSubmit = (e, dispatch) => {
    e.preventDefault();
    const selectedProduct = {
      id: productData.id,
      productName: productData.productName,
      price: productData.price,
      image: productData.image,
    };
    dispatch({
      type: "ADD_TO_CART",
      product: selectedProduct,
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

  return (
    <>
      <Grid item xs={12} sm={6} md={3} padding={2}>
        <Card sx={{ maxWidth: 345 }} elevation={0} square={true}>
          <CardMedia
            component="img"
            height="400"
            image={productData.image}
            alt={productData.productName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {productData.productName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={(e) => _handleSubmit(e, dispatch)}
            >
              <ShoppingBasketIcon sx={{ fontSize: 25 }} style={{color: 'black'}} />
            </Button>
            <Button onClick={handleClickOpen}>
            <RemoveRedEyeIcon sx={{ fontSize: 30 }} style={{color: 'black'}} ></RemoveRedEyeIcon>
            </Button>
            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
  

              <Grid  padding={2} ml={8} mt={8} >
                <List margin={4}>
                  <ListItem key={productData.id} >
                    <img
                      src={productData.image}
                      alt={productData.productName}
                      width={500}
                      
                    />
                    <ListItemText></ListItemText>
                    <ListItemText
                      padding={8}
                      primary={productData.productName}
                      secondary={`$${productData.price}`}
                    />
                    <ListItemText>
                    <Button
                    autoFocus
                    color="inherit"
                    onClick={(e) => _handleSubmit(e, dispatch)}
                  >
                     <ShoppingBasketIcon sx={{ fontSize: 40 }} style={{color: 'black'}} />
                  </Button>
                    </ListItemText>
                    <ListItemText>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                    <CloseIcon />
                  </Button>
                    </ListItemText>
                     </ListItem>
                </List>
              </Grid>
            </Dialog>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

// <img width='100px' src={productData.image} alt={productData.productName} />
// <h3>{productData.productName}</h3>
// <div>${productData.price}</div>
// <div>
// <button type='submit'>Add to Cart</button>
// </div>
