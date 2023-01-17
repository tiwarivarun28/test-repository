import React from "react";
import { Link } from "react-router-dom";
import styles from "./eightFacility.module.css";
export const EightFacility = () => {
  return (
    <div className={styles.EightFacilityMain}>
      <div>
        <Link to="/bookatable" className={styles.eightLink}>
          <div className={styles.eightFacilityFlex}>
            <img
              className={styles.eightLogo}
              src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/bffet.png"
              alt="buffetImg"
            />
            <div className={styles.eightText}>Buffet</div>
          </div>
        </Link>
      </div>

      <div>
        <Link to="/bookatable" className={styles.eightLink}>
          <div className={styles.eightFacilityFlex}>
            <img
              className={styles.eightLogo}
              src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pocket_friendly.png"
              alt="buffetImg"
            />
            <div className={styles.eightText}>Pocket Friendly</div>
          </div>
        </Link>
      </div>

      <div>
        <Link to="/bookatable" className={styles.eightLink}>
          <div className={styles.eightFacilityFlex}>
            <img
              className={styles.eightLogo}
              src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pet_friendly.png"
              alt="buffetImg"
            />
            <div className={styles.eightText}>Pet Friendly</div>
          </div>
        </Link>
      </div>

      <div>
        <Link to="/bookatable" className={styles.eightLink}>
          <div className={styles.eightFacilityFlex}>
            <img
              className={styles.eightLogo}
              src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/must_visit.png"
              alt="buffetImg"
            />
            <div className={styles.eightText}>Must Visit</div>
          </div>
        </Link>
      </div>

      <div>
        <Link to="/bookatable" className={styles.eightLink}>
          <div className={styles.eightFacilityFlex}>
            <img
              className={styles.eightLogo}
              src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/family_time.png"
              alt="buffetImg"
            />
            <div className={styles.eightText}>Family Time</div>
          </div>
        </Link>
      </div>

      <div>
        <Link to="/bookatable" className={styles.eightLink}>
          <div className={styles.eightFacilityFlex}>
            <img
              className={styles.eightLogo}
              src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pure_veg.png"
              alt="buffetImg"
            />
            <div className={styles.eightText}>Pure Veg</div>
          </div>
        </Link>
      </div>

      <div>
        <Link to="/bookatable" className={styles.eightLink}>
          <div className={styles.eightFacilityFlex}>
            <img
              className={styles.eightLogo}
              src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/new_on_dineout.png"
              alt="buffetImg"
            />
            <div className={styles.eightText}>New On Dineout</div>
          </div>
        </Link>
      </div>

      <div>
        <Link to="/bookatable" className={styles.eightLink}>
          <div className={styles.eightFacilityFlex}>
            <img
              className={styles.eightLogo}
              src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/happiest_hour.png"
              alt="buffetImg"
            />
            <div className={styles.eightText}>Happiest Hours</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
