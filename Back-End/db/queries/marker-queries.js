const db = require("../../lib/db.js");

const getMarkers = () => {
  const text = `
	SELECT *
	FROM markers;`;

  return db
    .query(text)
    .then((res) => res.rows)
    .catch((err) => console.log(`Error at users queries 'getMarkers'`, err));
};
const getUserMarkers = (userID) => {
  const text = `
	SELECT *
	FROM markers WHERE user_id=$1;`;

  const values = [userID];

  return db
    .query(text, values)
    .then((res) => res.rows)
    .catch((err) => console.log(`Error at users queries 'getMarkers'`, err));
};

const addMarker = (markerObj) => {
  const text = `
	INSERT INTO markers (city_name, lat, lon)
	VALUES ($1, $2, $3)
	RETURNING *;`;
  const values = [markerObj.cityName, markerObj.lat, markerObj.long];

  return db
    .query(text, values)
    .then((res) => res.rows[0])
    .catch((err) => console.log(`Error at marker queries 'addMarker'`, err));
};

module.exports = {
  addMarker,
  getMarkers,
  getUserMarkers,
};
