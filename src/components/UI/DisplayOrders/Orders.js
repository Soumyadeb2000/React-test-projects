import React from "react";
import Products from "./Products";

const Orders = (props) => {
    
    return (
        <React.Fragment>
            <h1>Products</h1>
            <Products deleteProduct={props.deleteProduct} productData={props.productData}/>
        </React.Fragment>
    );
}

export default Orders;