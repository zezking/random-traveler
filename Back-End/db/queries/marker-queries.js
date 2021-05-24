const db = require("../../lib/db.js");

const getMarker = (markerID) => {};
const addMarker = (markerObj) => {
  const text = `
	INSERT INTO markers (city_name, lat, lon)
	VALUES ($1, $2, $3, $4)
	RETURNING *;`;
  const values = [markerObj.cityName, markerObj.lat, markerObj.long];

  return db
    .query(text, values)
    .then((res) => res.rows[0])
    .catch((err) => console.log(`Error at marker queries 'addMarker'`, err));
};

module.exports = {
  addMarker,
};
