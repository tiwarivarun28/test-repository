import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import ProductList from "./Components/ProductList.js";
import Footer from "./Components/Footer.js";
import AddItem from "./Components/AddItem";

function App() {
  const products = [
    {
      price: 99999,
      name: "Iphone 10s Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi 10s Max",
      quantity: 0,
    },
  ];
  let [productList, setProductList] = useState(products);
  let [totalamount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalamount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalamount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalamount;
    newTotalAmount -= newProductList[index].quantity*newProductList[index].price
    newProductList.splice(index , 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount)
  };

  const addItem = (name , price)=>{
    let newProductList = [...productList];
    newProductList.push({
      price:price,
      name:name,
      quantity:0
    })
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalamount={totalamount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
