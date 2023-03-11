import { useSelector,useDispatch } from "react-redux";

var basicStyle = {
  boxShadow: "0 0 10px black",
  paddding: "60px",
  width: "300px",
  margin: "100px auto",
  textAlign: "center",
};
function Counter() {
  let countValue = useSelector((Storedata) => {
    return Storedata.cReducer.count;
  });

  const dispatch= useDispatch()
  const increment=()=>{
      dispatch({
        type:"INCREMENT",
        payload:1
      })
  }

  const decrement=()=>{
    dispatch({
      type:"DECREMENT",
      payload:5
    })
  }
  return (
    <div style={basicStyle}>
      <h2>
        Counter Value is <span style={{ color: "red" }}>{countValue}</span>
      </h2>
      <button onClick={increment}>Increase</button>&nbsp;&nbsp;
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}
export default Counter;
