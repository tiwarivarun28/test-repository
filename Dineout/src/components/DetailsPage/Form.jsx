import React, { useState } from "react";
import styles from "./Form.module.css";
import ReactHorizontalDatePicker from "./ReactHorizontalDatePicker";
export const Form = (props) => {
  const [b, setB] = useState(false);
  const [l, setL] = useState(false);
  const [d, setD] = useState(false);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [guest, setGuest] = useState("");
  const addToCartHandler = () => {
    const raw = {
      name,
      mobile,
      guest,
      date,
      time,
    };

    props.addToCartHandler(raw);
  };
  const handleName = (e) => {
    setName(e.currentTarget.value);
  };
  const handleGuest = (e) => {
    if (e.currentTarget.value > 0) setGuest(e.currentTarget.value);
  };
  const handleMob = (e) => {
    setMobile(e.currentTarget.value);
  };
  const onSelectedDay = (d) => {

    setCount((prev) => prev + 1);
    if (count === 1) {
      setDate({
        day: d.getDate(),
        month: d.getMonth(),
        year: d.getYear(),
      });
      setCount(0);
    }
  };

  const handleB = (e) => {
    setB(true);
    setL(false);
    setD(false);
  };
  const handleL = (e) => {
    setB(false);
    setL(true);
    setD(false);
  };
  const handleD = (e) => {
    setB(false);
    setL(false);
    setD(true);
  };
  function handleTime(time_) {
    setTime(time_);
  }
  const plus = "+";
  return (
    <React.Fragment>
      <form className={styles.cartForm}>
        {!time && (
          <div className={styles.formHead}>Select an Offer or Deal</div>
        )}
        {time && <div className={styles.formHead}>Make a Reservation</div>}

        <div className={styles.formFill}>
          {time && (
            <div className={styles.offerDiv}>
              <div className={styles.offer}>
                <span>
                  <span>{plus}</span>
                  <img src="https://im1.dineout.co.in/images/uploads/mailer/2019/Jul/16/group-32.png" />
                  <span>Offer</span>
                </span>
              </div>
              <div>{`${1900 + date.year}-${date.month + 1}-${
                date.day
              } ${time}`}</div>
            </div>
          )}
          <div className={styles.scrollDiv}>
            <label className={styles.select}>Select Date</label>
            <div className={styles.calenderContainer}>
              <div className={styles.imgCal}>
                <div>
                  <span>MAR</span>
                </div>
                <img src="https://im1.dineout.co.in/images/uploads/misc/2020/Feb/14/calendar-img.png" />
              </div>
              <div className={styles.slider}>
                <p className={styles.para}>*double click to slect date</p>
                <ReactHorizontalDatePicker
                  selectedDay={onSelectedDay}
                  enableScroll={true}
                  enableDays={180}
                />
              </div>
            </div>

            {date && (
              <div>
                <div className={styles.calTitle}>
                  <div>time</div>
                  <div>
                    <span className={styles.para2}>
                      Choose an available time slot
                    </span>
                    {time && <span className={styles.finalTime}>{time}</span>}
                  </div>
                </div>
                {!time && (
                  <div className={styles.mealNav}>
                    <span
                      className={styles[`mealTime${b ? "active" : ""}`]}
                      onClick={handleB}
                    >
                      Breakfast
                    </span>
                    <span
                      className={styles[`mealTime${l ? "active" : ""}`]}
                      onClick={handleL}
                    >
                      Lunch
                    </span>
                    <span
                      className={styles[`mealTime${d ? "active" : ""}`]}
                      onClick={handleD}
                    >
                      Dinner
                    </span>
                  </div>
                )}
              </div>
            )}
            {!time && (
              <div className={styles.timeList}>
                {b && (
                  <div>
                    <div onClick={() => handleTime("09:00 AM Breakfast")}>
                      09:00 AM
                    </div>
                    <div onClick={() => handleTime("09:30 AM Breakfast")}>
                      09:30 AM
                    </div>
                    <div onClick={() => handleTime("10:00 AM Breakfast")}>
                      10:00 AM
                    </div>
                    <div onClick={() => handleTime("10:30 AM Breakfast")}>
                      10:30 AM
                    </div>
                    <div onClick={() => handleTime("11:00 AM Breakfast")}>
                      11:00 AM
                    </div>
                    <div onClick={() => handleTime("11:30 AM Breakfast")}>
                      11:30 AM
                    </div>
                  </div>
                )}
                {l && (
                  <div>
                    <div onClick={() => handleTime("12:00 PM Lunch")}>
                      12:00 PM
                    </div>
                    <div onClick={() => handleTime("12:30 PM Lunch")}>
                      12:30 PM
                    </div>
                    <div onClick={() => handleTime("01:00 PM Lunch")}>
                      01:00 PM
                    </div>
                    <div onClick={() => handleTime("01:30 PM Lunch")}>
                      01:30 PM
                    </div>
                    <div onClick={() => handleTime("02:00 PM Lunch")}>
                      02:00 PM
                    </div>
                    <div onClick={() => handleTime("02:30 PM Lunch")}>
                      02:30 PM
                    </div>
                  </div>
                )}
                {d && (
                  <div>
                    <div onClick={() => handleTime("08:00 PM Dinner")}>
                      08:00 PM
                    </div>
                    <div onClick={() => handleTime("08:30 PM Dinner")}>
                      08:30 PM
                    </div>
                    <div onClick={() => handleTime("09:00 PM Dinner")}>
                      09:00 PM
                    </div>
                    <div onClick={() => handleTime("09:30 PM Dinner")}>
                      09:30 PM
                    </div>
                    <div onClick={() => handleTime("10:00 PM Dinner")}>
                      10:00 PM
                    </div>
                    <div onClick={() => handleTime("10:30 PM Dinner")}>
                      10:30 PM
                    </div>
                  </div>
                )}
              </div>
            )}
            <div className={styles.calTitle}>
              <div>Slect Guest/s</div>
              <div>
                <span className={styles.para2}>
                  Choose the number of guests going
                </span>
              </div>
            </div>
            <input
              className={styles.inputField}
              type="number"
              onChange={handleGuest}
              min="1"
            />
            <div className={styles.calTitle}>
              <div>Enter Guest Details</div>
            </div>
            <input
              className={styles.inputField}
              type="text"
              placeholder="Guest Name"
              onChange={handleName}
            />
            <input
              className={styles.inputField}
              type="tel"
              placeholder="Mobile No."
              onChange={handleMob}
            />
          </div>
        </div>
        {guest && (
          <div className={styles.continueDiv}>
            <button
              className={styles.continueButton}
              onClick={addToCartHandler}
            >
              Continue
            </button>
          </div>
        )}
      </form>
    </React.Fragment>
  );
};
