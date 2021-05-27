const express = require("express");
const router = express.Router();
const {
  getMarkers,
  getUserMarkers,
  addMarker,
} = require("../db/queries/marker-queries");

router.get("/", (req, res) => {
  getMarkers()
    .then((data) => res.json(data))
    .catch((err) => console.log("Error at markers GET route /", err));
});

router.get("/:userId", (req, res) => {
  const userId = req.params.userId;

  getUserMarkers(userId)
    .then((data) => res.json(data))
    .catch((err) => console.log("Error at markers Get route /userId"));
});

module.exports = router;
