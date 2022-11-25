const net = require('net');

// const conn = net.createConnection({ 
//   host: 'google.com',
//   port: 80
// });
// conn.setEncoding('UTF8');


const request = require('request'); // Function call - 
request('http://www.google.com', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});