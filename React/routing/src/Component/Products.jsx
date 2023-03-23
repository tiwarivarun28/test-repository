import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    setProducts(data);
  };
  return (
    <div>
      <div style={{ margin: "30px 100px" }}>
        <h2 style={{textAlign:"center"}}>Product Details</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
          aliquam maiores, doloremque placeat hic suscipit magni tempora
          nesciunt iste itaque voluptatem doloribus eveniet a excepturi! Cum
          corrupti repellat praesentium fugit!
        </p>
      </div>
      {products.length > 0 ? (
        <div style={{ margin: "30px 100px" }}>
          <table
            style={{ width: "100%" }}
            frame="Box"
            rules="all"
            cellPadding={10}
          >
            <thead style={{ backgroundColor: "coral", color: "white" }}>
              <tr>
                <th>ID</th>
                <th>IMAGE</th>
                <th>Product NAME</th>
                <th>Price</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody align="center">
              {products.map((ele, index) => {
                return (
                  <tr key={index + 1}>
                    <td>{ele.id}</td>
                    <td>
                      <img src={ele.image} width={70} height={70} alt="img" />
                    </td>
                    <td>
                      {ele.title}
              
                    </td>
                    <td>{ele.price}</td>
                    <td>
                      <Link to={`/productDetails/${ele.id}`} style={{color:"blue"}}>Details</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div style={{ color: "red", textAlign: "center", marginTop: "50px" }}>
          <h2>Data not Available</h2>
        </div>
      )}
    </div>
  );
}
