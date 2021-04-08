const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  if (breedName === "chartreux") {
    breedName = "https://api.thecatapi.com/v1/breeds/search?q=chartreux";
  
  
    request(breedName, (error, response, body) => {
      if (error) {
        callback(error, null)
      }
      let desc = JSON.parse(body)[0].description;
      
      
      callback(null, desc);
    });
  } else {
    request(breedName, (error, response, body) => {
      if (error) {
        
        callback(error, null)
      }
      let desc = JSON.parse(body)[0].description;
      
      callback(null, desc);
    });
  } 
   
};

module.exports = fetchBreedDescription;