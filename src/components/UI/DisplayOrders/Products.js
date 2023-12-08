import React from "react";

const Table = (props) => {

    const deleteElectronicsItemHandler = (event) => {
        const idx = event.target.id;
        props.deleteProduct.electronicItemsDeleteHandler(idx);
    }

    const deleteFoodItemHandler = (event) => {
        const idx = event.target.id;
        props.deleteProduct.foodItemsDeleteHandler(idx);
    }

    const deleteSkincareItemHandler = (event) => {
        const idx = event.target.id;
        props.deleteProduct.skincareItemsDeleteHandler(idx);
    }

    return (
        <React.Fragment>
            <div>
                <h3>Electronic Items</h3>
                <ul>
                    {props.productData.electronics.map((product, idx) => {
                        return (
                            <li key={idx}>{product.price} - Electronics - {product.name}
                                <button id={idx} onClick={deleteElectronicsItemHandler}>Delete Product</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <h3>Food Items</h3>
                <ul>
                    {props.productData.food.map((product, idx) => {
                        return (
                            <li key={idx}>{product.price} - Food Items - {product.name}
                                <button id={idx} onClick={deleteFoodItemHandler}>Delete Product</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <h3>Skincare Items</h3>
                <ul>
                    {props.productData.skincare.map((product, idx) => {
                        return (
                            <li key={idx}>{product.price} - Skincare Items - {product.name}
                                <button id={idx} onClick={deleteSkincareItemHandler}>Delete Product</button>
                            </li>
                        )    
                    })}
                </ul>
            </div>
        </React.Fragment>
    );
}

export default Table;