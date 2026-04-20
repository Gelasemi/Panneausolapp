// services/pluService.js
const axios = require("axios");

async function getPLU(city) {
  try {
    const res = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${city}`);
    
    return {
      zone: "urbaine",
      contraintes: ["hauteur max 12m", "toiture inclinée"]
    };

  } catch (err) {
    return null;
  }
}

module.exports = { getPLU };