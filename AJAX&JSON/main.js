/*
 * AJAX: Downloads new data from a different URL
 * JSON (Java Script Object Notation): Storing and working with data (sending, receiving and storing data)
 *      - Objects and Arrays nested inside each other
 */

//First step in connecting to server is to create a variable of XMLHttpRequest type
//XMLHttpRequest: Web browsers have a built in tool called XMLHttpRequest.
// This tool does the heavy lifting  of establishing a connection with the
// desired URL to download data from, and then it lets the user send and receive data
var ourRequest = new XMLHttpRequest();

//Second Step is to request something
//First Argument:
//To receive data from the server type 'GET'
//To send data to the server you type 'POST'
//Second Argument:
//Url to the server to receive or send data
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');

//Third step is to write what to do once the data is sent or received
//Self explanatory: on load what should the website do?
ourRequest.onload = function () {

}