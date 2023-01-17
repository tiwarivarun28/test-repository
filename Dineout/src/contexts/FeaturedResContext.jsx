import React, { createContext, useEffect, useState } from "react";

export const FeaturedResContext = createContext();

export const FeaturedResContextProvider = ({ children }) => {
  const [featuredData, setFeaturedData] = useState([]);

  useEffect(() => {
    fetch("https://fake-json-server2.herokuapp.com/posts", {
		method: "GET",
		headers: { "Content-type": "application/json;charset=UTF-8" },
	})
		.then((response) => response.json())
		.then((json) => {

			setFeaturedData(json);
		})

  }, []);
  return (
    <FeaturedResContext.Provider value={featuredData}>
      {children}
    </FeaturedResContext.Provider>
  );
};
