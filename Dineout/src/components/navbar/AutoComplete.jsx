import React, { useContext } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { NavbarContext } from "../../contexts/NavbarContext";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { set_city } from "../../Redux/Restaurants/actions";
export const AutoComplete = () => {
  const places = useContext(NavbarContext);
  const dispatch = useDispatch();
  let city = useSelector((store) => store.RestaurantReducer.city);
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onChange={(event, value) => dispatch(set_city(value))}
      options={places}
      value={city}
      sx={{
        width: 220,
      }}
      renderInput={(params) => (
        <TextField {...params} placeholder="Location" size="small" />
      )}
    />
  );
};
