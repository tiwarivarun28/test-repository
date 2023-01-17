import React, { useContext, useEffect, useState } from "react";
import styles from "./restaurantNearYou.module.css";
import { RestaurantNeatYouContext } from "../../contexts/RestaurantNeatYouContext";
import { Link } from "react-router-dom";
import { CardDisplay } from "./CardDisplay";
import { useSelector } from "react-redux";

export const RestaurantNearYou = () => {
  // const resData = useContext(RestaurantNeatYouContext);
  let city = useSelector((store) => store.RestaurantReducer.city);
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetch(`https://fake-json-server2.herokuapp.com/posts?city=${city}`)
		.then((response) => response.json())
		.then((json) => {

			setResData([...json]);
		})

  }, [city]);

  const array = resData.splice(0, 4);
  return (
    <div className={styles.restaurantNearYouMain}>
      <div className={styles.resNearTitleMain}>
        <h2 className={styles.resNearTitleText}>Restaurants Near You</h2>
        <Link className={styles.resNearLink} to="/">
          see All
        </Link>
      </div>
      <div className={styles.alignMain}>
        {array.map((elem) => (
          <CardDisplay key={elem.id} elem={elem} />
        ))}
      </div>
    </div>
  );
};
