import React from "react";
import Card from "@material-ui/core/Card";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddMarker from "./AddMarker";
import { makeStyles, Typography } from "@material-ui/core";
import { continentSlicer } from "../helper/helper";
const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    padding: theme.spacing(3),
  },
}));

const CityCard = ({ city, marker, setOpenCityCard, setCity }) => {
  const { NAME: name, ADM0NAME: country, TIMEZONE: timezone } = city.properties;
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
        <Typography>continent: {continent}</Typography>
        <AddMarker />
      </Card>
    </Grid>
  );
};

export default CityCard;
