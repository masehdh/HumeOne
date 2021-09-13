const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/auto-complete", (req, res) => {
  try {
    const baseURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
    const queryURL = `${req.body.input}.json?types=address&proximity=-79.347015,43.651070&country=CA&access_token=${process.env.MAPBOX_API_KEY}`

    axios.get(baseURL + queryURL)
      .then((output => {
        res
          .status(200)
          .json({
            code: 200,
            message: "",
            output: output.data.features,
          });
      }))
      .catch((error) =>
        console.log("Error from Maps API:", error)
      )
  } catch (error) {
    return res
      .status(400)
      .json({ code: error.code, message: error.message, stack: error.stack });
  }
})

module.exports = router