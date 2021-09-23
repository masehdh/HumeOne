const express = require("express");
const axios = require("axios");
const citiesGeodata = require("../../resources/cities-geodata.json");

const router = express.Router();

router.post("/auto-complete", (req, res) => {
  try {
    let possibleCities = []

    citiesGeodata.forEach((country) => {
      country.states.forEach((state) =>
        state.cities.forEach(city => {
          const area = `${city.name.toLowerCase()}, ${state.name.toLowerCase()}, ${country.name.toLowerCase()}`
          if (area.includes(req.body.input.toLowerCase())) {
            possibleCities.push({ name: city.name, region: state.name, country: country.name, coordinates: [city.longitude, city.latitude] })
          } else return
        })
      )
    })

    res.status(200).json({
      code: 200,
      message: "",
      output: possibleCities.slice(0,10),
    })
  } catch (error) {
    return res
      .status(400)
      .json({ code: error.code, message: error.message, stack: error.stack });
  }
})

module.exports = router