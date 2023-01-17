import React, { useEffect } from 'react'
import { createContext } from 'react'

export const NavbarContext = createContext();

export const NavbarContextProvider = ({ children }) => {
    useEffect(() => {
		fetch(
			"https://fake-json-server2.herokuapp.com/navbarplacessearch",
			{
				method: "GET",
				headers: { "Content-type": "application/json;charset=UTF-8" },
			}
		)
			.then((response) => response.json())
			.then((json) => {
		
				display(json[0]);
			})
	
	});

	const places = [];
	function display(json) {
		for (const key in json) {
			places.push(key);
		}
	}
  return (
      <NavbarContext.Provider value={places}>{ children }</NavbarContext.Provider>
  )
}
