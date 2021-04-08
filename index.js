const fetchBreedDescription = require("./breedFetcher.js");

let input = process.argv.slice(2);
let breedName = input.toString();

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});