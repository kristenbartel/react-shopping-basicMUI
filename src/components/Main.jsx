import Product from "./Product";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Main(props) {
  const { productData } = props;
  return (
    <>
      <h1></h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-star"
          margin={2}
        >
          {productData.map((oneProduct) => (
            <Product key={oneProduct.id} productData={oneProduct} />
          ))}
        </Grid>
      </Box>
      <div></div>
    </>
  );
}

export default Main;
