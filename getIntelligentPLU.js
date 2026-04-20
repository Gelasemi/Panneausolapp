const { getPLU } = require("./pluService");
const { scrapePLU } = require("./pluScraper");

async function getPLUData(city) {

  let plu = await getPLU(city);

  if (!plu) {
    plu = await scrapePLU(city);
  }

  return plu;
}