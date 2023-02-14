import { Autocomplete, Button, ButtonGroup, TextField } from "@mui/material";
import React from "react";
import { City } from "../../types";

const Controls = (props: {
  onOpenRegisterForm: () => void;
  cities: City[];
}) => {
  const { onOpenRegisterForm, cities } = props;
  return (
    <div style={{ position: "absolute", zIndex: 1000 }}>
      <Autocomplete
        id="search"
        options={cities}
        getOptionLabel={(city: City) => city.properties.NAME}
        renderInput={(params) => (
          <TextField {...params} label="Search city" variant="outlined" />
        )}
        onChange={(event, value) => {
          //setCity(value);
          //setOpenCityCard(true);
        }}
      />

      <Button variant="contained" onClick={onOpenRegisterForm}>
        Login
      </Button>
      <Button variant="contained">Register</Button>
    </div>
  );
};

export default Controls;
