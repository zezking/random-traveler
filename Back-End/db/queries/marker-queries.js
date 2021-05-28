const db = require("../../lib/db.js");
console.log("it's here");
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
  console.log(markerObj);
  const text = `
	INSERT INTO markers (user_id, city_name, lat, lon)
	VALUES ($1, $2, $3, $4)
	RETURNING *;`;
  const values = [
    markerObj.userId,
    markerObj.cityName,
    markerObj.lat,
    markerObj.lon,
  ];

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
