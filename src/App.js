import React, { useState } from "react";
import UserForm from "./components/UserForm";
import Orders from "./components/UI/DisplayOrders/Orders";

const App = () => {

  const [electronicItems, setElectronicItems] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [skincareItems, setSkincareItems] = useState([]);

  const getProductData = (pid, price, name, category) => {
    if (category === 'electronics') {
      setElectronicItems((prev) => {
        return [{ pid, price, name, category }, ...prev]
      })
    } else if (category === 'food') {
      setFoodItems((prev) => {
        return [{ pid, price, name, category }, ...prev]
      })
    } else {
      setSkincareItems((prev) => {
        return [{ pid, price, name, category }, ...prev]
      })
    }
  }

  localStorage.setItem('electronics', JSON.stringify(electronicItems));
  localStorage.setItem('food', JSON.stringify((foodItems)));
  localStorage.setItem('skincare', JSON.stringify(skincareItems));

  const electronicItemsDeleteHandler = (idx) => {
    setElectronicItems((prev) => {
      prev.splice(idx, 1)
      return [...prev]
    })
  }

  const foodItemsDeleteHandler = (idx) => {
    setFoodItems((prev) => {
      prev.splice(idx, 1)
      return [...prev]
    })
  }

  const skincareItemsDeleteHandler = (idx) => {
    setSkincareItems((prev) => {
      prev.splice(idx, 1)
      return [...prev]
    })
  }

  return (
    <React.Fragment>
      <UserForm getProductData={getProductData} />
      <Orders deleteProduct={{electronicItemsDeleteHandler, foodItemsDeleteHandler, skincareItemsDeleteHandler}} productData={{ 'electronics': electronicItems, 'food': foodItems, 'skincare': skincareItems }} />
    </React.Fragment>
  );
}

export default App;