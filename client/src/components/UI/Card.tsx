import React from "react";
import AddMarker from "./AddMarker";
import { makeStyles, Typography } from "@material-ui/core";
import { continentSlicer } from "../helper/helper";
const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    padding: theme.spacing(3),
  },
}));

const CityCard = ({ city, markers, setOpenCityCard, setCity, setMarkers }) => {
  const {
    NAME: name,
    ADM0NAME: country,
    TIMEZONE: timezone,
    LATITUDE: lat,
    LONGITUDE: lon,
  } = city.properties;
  const classes = useStyles();
  const continent = continentSlicer(timezone);

  return (
    <Grid item>
      <Card className={classes.root}>
        <Grid container justify="flex-end">
          <Button onClick={() => setOpenCityCard(false)}>
            <CloseIcon />
          </Button>
        </Grid>
        <Typography variant="h1">{name}</Typography>
        <Typography>Country: {country}</Typography>
        <Typography>Continent: {continent}</Typography>
        <Typography>Lat: {lat}</Typography>
        <Typography>Lon: {lon}</Typography>
        <AddMarker markers={markers} setMarkers={setMarkers} city={city} />
      </Card>
    </Grid>
  );
};

export default CityCard;
