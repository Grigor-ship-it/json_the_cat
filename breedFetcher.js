const request = require('request');

let input = process.argv.slice(2);
let domainName = input.toString();

if (domainName === "chartreux") {
  domainName = "https://api.thecatapi.com/v1/breeds/search?q=chartreux";


  request(domainName, (error, response, body) => {
    console.log('error:', error);
    console.log('statuscode:', response && response.statusCode);
    console.log('body:', body);
    const data = JSON.parse(body);
    console.log(data);
  });
} else request(domainName, (error, response, body) => {
  console.log('error:', error);
  console.log('statuscode:', response && response.statusCode);
  console.log('body:', body);
  const data = JSON.parse(body);
  console.log(data);
});
 
