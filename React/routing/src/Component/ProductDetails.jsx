import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [state, setstate] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    category: "",
  });
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setstate(data));
  }, []);
  return (
    <div style={{
        boxShadow:"0 0 10px black",
        textAlign:"center",
        width:"300px",
        margin:"50px auto",
        padding:"50px"
    }}>
      <div>
        <h2>{state.category}</h2>
        <img src={state.image} width="300" height="300" alt="img" />
        <p>{state.title}</p>
        <p>{state.description}</p>
      </div>
    </div>
  );
}
