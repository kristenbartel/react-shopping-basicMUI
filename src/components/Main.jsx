import Product from "./Product";

function Main(props) {
    const { productData } = props;
    return(
        <main>
        <h2>Main</h2>
        <div>
            {productData.map((oneProduct) => (
                <Product key={oneProduct.id} productData={oneProduct} />
            ))
            }
        </div>
        </main>
    );
}

export default Main;