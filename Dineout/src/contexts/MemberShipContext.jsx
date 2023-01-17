import React, { useEffect, useState } from 'react'
import { createContext } from 'react';

export const MemberShipContext = createContext();
export const MemberShipContextProvider = ({ children }) => {
    const [member,setMember] = useState([])
    useEffect(() => {
		fetch("https://fake-json-server2.herokuapp.com/membership", {
			method: "GET",
			headers: { "Content-type": "application/json;charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((json) => {
				setMember(json);
			})
			
	}, []);

  return (
      <MemberShipContext.Provider value={member}>{ children }</MemberShipContext.Provider>
  )
}
