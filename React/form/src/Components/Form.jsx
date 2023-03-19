import React from 'react'
import {useState} from "react"

export default function Form() {
    var inputdata={
        name:"",
        password:"",
        email:"",
        city:"",
    }
    const [data,setData]=useState(inputdata)
    var style={
        width:"300px",
        boxShadow:"0 0 10px black",
        margin:"50px auto",
        padding:"30px",
        textAlign:"center"
    }
    

    const handlechange=(event)=>{
           const {value,name}=event.target
           setData({
            ...data,
            [name]:value
           })
    }
    const getData=(event)=>{
        event.preventDefault()
        console.log(data)
        event.target.reset();

    }
  return (
    <div style={style}>
        <form  onSubmit={getData}>
            <h3>User Form</h3>
            <div>
                <input type="text" placeholder="User Name" name="name" onChange={handlechange}/>
            </div><br />
            <div>
                <input type="password" placeholder="Password" name="password" onChange={handlechange}/>
            </div><br />
            <div>
                <input type="email" placeholder="Email" name="email" onChange={handlechange}/>
            </div><br />
            <select onChange={handlechange} name="city">
                <option >Select City</option>
                <option >Lucknow</option>
                <option >Delhi</option>
                <option >Jaipur</option>
                <option >Chandigarh</option>
            </select><br />&nbsp;
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}
