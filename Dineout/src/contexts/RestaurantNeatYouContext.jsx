import React, { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const RestaurantNeatYouContext = createContext();

export const RestaurantNeatYouContextProvider = ({ children }) => {
  var [resData, setResData] = useState();

  useEffect(() => {
    fetch(`https://fake-json-server2.herokuapp.com/posts`, {
		method: "GET",
		headers: { "Content-type": "application/json;charset=UTF-8" },
	})
		.then((response) => response.json())
		.then((json) => {
			display(json);
		})
	
  }, []);

  function display(json) {
    setResData(json);
  }
  return (
    <RestaurantNeatYouContext.Provider value={resData}>
      {children}
    </RestaurantNeatYouContext.Provider>
  );
};
