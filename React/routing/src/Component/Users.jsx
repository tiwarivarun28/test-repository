import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [page,setPage]=useState(1);
  const [searchParams,setSearchParams]=useSearchParams();

  useEffect(() => {
    setSearchParams({
      page:page,
    })
    getUserDetails();
  }, [page]);

  const getUserDetails = async () => {
    let res = await fetch(`https://reqres.in/api/users?page=${page}`);
    let data = await res.json();
    setUsers(data.data);
  };

  const handleChange=(value)=>{
  var pageno=page+value
  if(pageno>=1 && pageno<=2)
  {
    setPage(pageno)
  }
  }
  return (
    <div>
      {users.length > 0 ? (
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
                <th>NAME</th>
                <th>EMAIL</th>
              </tr>
            </thead>
            <tbody align="center">
              {users.map((ele, index) => {
                return (
                  <tr key={index + 1}>
                    <td>{ele.id}</td>
                    <td>
                      <img src={ele.avatar} width={70} height={70} alt="img" />
                    </td>
                    <td>
                      {ele.first_name}
                      {ele.last_name}
                    </td>
                    <td>{ele.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div style={{textAlign:"center",margin:"30px"}}>
            <button onClick={()=>handleChange(-1)}>Prev</button>&nbsp;
            <button>{page}</button>&nbsp;
            <button onClick={()=>handleChange(1)}>Next</button>&nbsp;
          </div>
        </div>
      ) : (
        <div style={{ color: "red", textAlign: "center", marginTop: "50px" }}>
          <h2>Data not Available</h2>
        </div>
      )}
    </div>
  );
}
