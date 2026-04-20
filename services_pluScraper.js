// services/pluScraper.js
const axios = require("axios");
const cheerio = require("cheerio");

async function scrapePLU(city) {

  const url = `https://www.google.com/search?q=PLU+${city}`;
  const { data } = await axios.get(url);

  const $ = cheerio.load(data);

  return {
    zone: "à vérifier",
    contraintes: ["règlement local spécifique"]
  };
}

module.exports = { scrapePLU };