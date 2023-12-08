import React from "react";

const UserForm = (props) => {

    const submitHandler = (event) => {
        event.preventDefault();
        const pid = event.target.pid.value;
        const price = event.target.price.value;
        const name = event.target.name.value;
        const category = event.target.category.value;
        props.getProductData(pid, price, name, category);
        event.target.pid.value = '';
        event.target.price.value = '';
        event.target.name.value = '';
        event.target.category.value = '';
    }

    return (
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <label>Product ID</label>
                <input name='pid' id="pid" type="number"/>
                <label>Selling Price</label>
                <input name='price' id="price" type="number" />
                <label>Product Name</label>
                <input name='name' id="name" type="text" />
                <label>Choose a Category</label>
                <select id="category">
                    <option value="electronics">Electronics</option>
                    <option value="food">Food</option>
                    <option value="skincare">Skincare</option>
                </select>
                <button>Add Product</button>
            </form>
        </React.Fragment>
    );
}

export default UserForm;