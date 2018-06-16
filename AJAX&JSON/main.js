$(function () {
    var count = 0;
    $("#btn").on("click", function () {
        count++;

     //checks if the count is 3 (3 for 3 urls) if it exceeds the button will be hidden
    if(count >=1 && count <=3) {
        /*
         * AJAX (Asynchronous JavaScript and XML): [Asynchronous:(in the background; not requiring refresh) JavaScript And XML:(data format very similar to JSON. We are using JSON instead of XML but XML sounds better with the acronym so... ya)]:
          * Downloads new data from a different URL^
          *
         * JSON (Java Script Object Notation): Storing and working with data (sending, receiving and storing data)
         *      - Objects and Arrays nested inside each other
         */

        //First step in connecting to server is to create a variable of XMLHttpRequest type
        //XMLHttpRequest: Web browsers have a built in tool called XMLHttpRequest.
        // This tool does the heavy lifting  of establishing a connection with the
        // desired URL to download data from, and then it lets the user send and receive data
        //BTW: technically It should be called JSONHttpRequest, because it is downloading JSON files. We no longer use XML files, but since XML was here for a long time it stuck :p
        var ourRequest = new XMLHttpRequest();

        //Second Step is to request something
        //First Argument:
        //To receive data from the server type 'GET'
        //To send data to the server you type 'POST'
        //Second Argument:
        //Url to the server to receive or send data
        ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + count + '.json');
        //Third step is to write what to do once the data is sent or received
        //Self explanatory: on load what should the website do?
        ourRequest.onload = function () {
            //Checks for connection errors
            if(ourRequest.status >= 200 && ourRequest.status <= 400){
                //responseText is the text pulled from the server
                //The following method views the data receive as a giant text rather then a JSON file
                //DONE USE (if the import data is JSON): var ourData = ourRequest.responseText;

                //use this, it tells the computer to see the file as JSON. It makes it easier
                //for the programmer to uses index to get specific things from the data
                var ourData = JSON.parse(ourRequest.responseText);
                renderHTML(ourData);
            } else {
                alert("ERROR");
            }
        }
        //To handle with error before we send:
        ourRequest.onerror = function() {
            alert("Connection Error: please disable any ad blockers or firewalls. Refresh the page after doing so")
        }

        //After finished getting the files, send the files
        //*Sends AJAX request
        //*If there is any error like : Failed to load resource: net::ERR_BLOCKED_BY_CLIENT
        //*It might be because of an add block or some kind of firewall
        ourRequest.send();

    }else {
        $("#btn").hide(300);
    }

    })

    function renderHTML(data) {
        //Gets the names and species types in the downloaded data and puts them in paragraph form in a String var called returnString
        var returnString = "";
        for(var i = 0; i < data.length; i++){
            returnString += "<p>" + data[i].name +  " is a " + data[i].species + ', that likes to eat ';

            for(var ii = 0; ii < data[i].foods.likes.length; ii++){
                if(ii ==0){
                    returnString += data[i].foods.likes[ii];
                }else {
                    returnString += ' and ' + data[i].foods.likes[ii];
                }

                if(ii = data[i].foods.likes.length){
                    returnString += '. '
                }
            }

            returnString += 'But does not like, '

            for(var ii = 0; ii < data[i].foods.dislikes.length; ii++){
                if(ii ==0){
                    returnString += data[i].foods.dislikes[ii];
                }else {
                    returnString += ' and ' + data[i].foods.dislikes[ii];
                }
            }

            returnString += '.</p>';
        }

        //puts the returnString in the HTML file
        //append: to insert specified content as the last child of each element in the jQuery collection
        //to insert as the first child, use .prepend()
        $("#animal-info").append(returnString);
    }
})

//OR (without jQuery):

// var buttonPressed = document.getElementById("btn");
// var animalContainer = document.getElementById('animal-info');
// var count = 1;
//
// buttonPressed.addEventListener("click", function () {
//     var outRequest = new XMLHttpRequest;
//
//     outRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + count + '.json');
//
//     outRequest.onload = function () {
//         var ourData = JSON.parse(outRequest.responseText);
//
//         outPutToWeb(ourData);
//     }
//     outRequest.send();
//     count++
//     if(count >= 4){
//          buttonPressed.classList.add("hide-me");
//     }
// });
//
// function outPutToWeb(data) {
//     var outString = "";
//     for(var i = 0; i < data.length; i++){
//         outString += '<p>' + data[i].name + ' is a ' + data[i].species;
//     }
//
//    //element.insertAdjacentHTML(position, text);
//    //Parameters
//    //position
//    //A DOMString representing the position relative to the element; must be one of the following strings:
//        //'beforebegin': Before the element itself.
//        //'afterbegin': Just inside the element, before its first child.
//        //'beforeend': Just inside the element, after its last child.
//        //'afterend': After the element itself.
//     animalContainer.insertAdjacentHTML('beforeend', outString);
// }