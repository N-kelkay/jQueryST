// $(function () {
//     $("#btn").on("click", function () {
//             /*
//      * AJAX (Asynchronous JavaScript and XML): [Asynchronous:(in the background; not requiring refresh) JavaScript And XML:(data format very similar to JSON. We are using JSON instead of XML but XML sounds better with the acronym so... ya)]:
//       * Downloads new data from a different URL^
//       *
//      * JSON (Java Script Object Notation): Storing and working with data (sending, receiving and storing data)
//      *      - Objects and Arrays nested inside each other
//      */
//
//     //First step in connecting to server is to create a variable of XMLHttpRequest type
//     //XMLHttpRequest: Web browsers have a built in tool called XMLHttpRequest.
//     // This tool does the heavy lifting  of establishing a connection with the
//     // desired URL to download data from, and then it lets the user send and receive data
//     //BTW: technically It should be called JSONHttpRequest, because it is downloading JSON files. We no longer use XML files, but since XML was here for a long time it stuck :p
//         var ourRequest = new XMLHttpRequest();
//
//     //Second Step is to request something
//     //First Argument:
//     //To receive data from the server type 'GET'
//     //To send data to the server you type 'POST'
//     //Second Argument:
//     //Url to the server to receive or send data
//         ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
//     //Third step is to write what to do once the data is sent or received
//     //Self explanatory: on load what should the website do?
//         ourRequest.onload = function () {
//             //responseText is the text pulled from the server
//             //The following method views the data receive as a giant text rather then a JSON file
//             //DONE USE (if the import data is JSON): var ourData = ourRequest.responseText;
//
//             //use this, it tells the computer to see the file as JSON. It makes it easier
//             //for the programmer to uses index to get specific things from the data
//             var ourData = JSON.parse(ourRequest.responseText);
//             renderHTML(ourData);
//         }
//     //After finished getting the files, send the files
//     //*If there is any error like : Failed to load resource: net::ERR_BLOCKED_BY_CLIENT
//     //*It might be because of an add block or some kind of firewall
//         ourRequest.send();
//     })
//
//     function renderHTML(data) {
//         //Gets the names and species types in the downloaded data and puts them in paragraph form in a String var called returnString
//         var returnString = "";
//         for(var i = 0; i < data.length; i++){
//             returnString += '<p>' + data[i].name + ' is a ' + data[i].species + '</p>';
//         }
//
//         //puts the returnString in the HTML file
//         //append: to insert specified content as the last child of each element in the jQuery collection
//         //to insert as the first child, use .prepend()
//         $("#animal-info").append(returnString);
//     }
// })

//OR (without jQuery):

var buttonPressed = document.getElementById("btn");
var animalContainer = document.getElementById('animal-info');

buttonPressed.addEventListener("click", function () {
    var outRequest = new XMLHttpRequest;

    outRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');

    outRequest.onload = function () {
        var ourData = JSON.parse(outRequest.responseText);

        outPutToWeb(ourData);
    }
    outRequest.send();
});

function outPutToWeb(data) {
    var outString = "";
    for(var i = 0; i < data.length; i++){
        outString += '<p>' + data[i].name + ' is a ' + data[i].species;
    }

    animalContainer.insertAdjacentHTML('beforeend', outString);
}

