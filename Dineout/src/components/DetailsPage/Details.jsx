import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./Details.module.css";
import { cartActions } from "../../store/cart-slice";
import { DropDownNavbar } from "../navbar/DropDownNavbar";
import { AvailableIn } from "../home/AvailableIn";
import { Form } from "./Form";
export const Details = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState(location.state);

  const arrow = ">";
  const addToCartHandler = (parameter) => {
    const id_date = new Date();

    const newData_ = { data, ...parameter, id: id_date };
    dispatch(cartActions.addItemToCart(newData_));
    navigate("/");
  };
  const navToBookATable = () => {
    navigate("/bookatable");
  };
  return (
    <React.Fragment>
      <DropDownNavbar />
      <div className={styles.mainPage}>
        <div className={styles.mainBody}>
          <div className={styles.headRoute}>
            dineout {arrow} {data.city} {arrow} {data.area} {arrow}{" "}
            {data.address}
            {arrow} {data.name}
          </div>
          <img src={data.image} alt="" />
          <div className={styles.info}>
            <div>
              <div className={styles.restName}>{data.name}</div>
              <div className={styles.basicCost}>
                <div>{data.averageCost} |</div>
                <div className={styles.menuinfo}>{data.cuisine.join(",")}</div>
              </div>
              <div className={styles.address}>
                {data.area} | {data.city}
              </div>
            </div>
            <div className={styles.rating}>
              <span className={styles.rate}>{data.rating}</span>
              <div className={styles.rateReview}>21 reviews</div>
            </div>
          </div>
          <div className={styles.dineoutPay}>
            <img src="https://im1.dineout.co.in/images/uploads/mailer/2019/Jul/11/gp-logo.png?tr=tr:n-medium" alt="" />

            <div>
              Combine any offer with Dineout Pay to <b>save up to 10%</b> more
              on your bill and also get <b>20%</b>cashback.
            </div>
          </div>
          <div className={styles.aboutContainer}>
            <div>About</div>
            <p>{data.about}</p>
            <div className={styles.features}>
              <img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_30.png" alt="" />
              <div>
                <div className={styles.featuresName}>COUSINE</div>
                <div className={styles.featuresDetails}>
                  {data.cuisine.join(",")}
                </div>
              </div>
            </div>
            <div className={styles.features}>
              <img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_5.png" alt="" />
              <div>
                <div className={styles.featuresName}>TYPE</div>
                <div>{data.type.join(",")}</div>
              </div>
            </div>
            <div className={styles.features}>
              <img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/grouprupee.png" alt="" />
              <div>
                <div className={styles.featuresName}>AVERAGE COST</div>
                <div>{data.averageCost}</div>
              </div>
            </div>
            <div className={styles.features}>
              <img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_3.png" alt="" />
              <div>
                <div className={styles.featuresName}>BESTSELLING ITEMS</div>
                <div>{data.bestSellingItems.join(",")}</div>
              </div>
            </div>
            <div className={styles.features}>
              <img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jun/19/group_2.png" alt="" />
              <div>
                <div className={styles.featuresName}>FACILITIES & FEATURES</div>
              </div>
            </div>
            <ul className={styles.featuresList}>
              {data.facilities.map((ele) => (
                <li key={ele[0]}>
                  <img className={styles.featuresImage} src={ele[1]} />
                  <span>{ele[0]}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.viewmore} onClick={navToBookATable}>
            <img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/1/chainoutlets.png" alt="" />
            <div>View more outlets of this chain in {data.city}</div>
            <div className={styles.viewmorearr}>{arrow}</div>
          </div>
          <div className={styles.contactContainer}>
            <div className={styles.contactContainerName}>
              We're always here to help
            </div>
            <div>
              <div>
                <img src="https://im1.dineout.co.in/images/uploads/mailer/2019/Jun/19/group_74.png" alt="" />
                <div>
                  <div>Call Us</div>
                  <div>{data.callUs[0]}</div>
                </div>
              </div>
              <div>
                <img src="https://im1.dineout.co.in/images/uploads/mailer/2019/Jun/19/group_74.png" alt="" />
                <div>
                  <div>Call the restaurant</div>
                  <div>{data.callUs[1]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Form addToCartHandler={addToCartHandler} />
        </div>
      </div>
      <AvailableIn />
    </React.Fragment>
  );
};
