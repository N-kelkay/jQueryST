/*
AJAX: Asynchronous JavaScript And XML
Use XMLHttpRequest (XHR) objects to interact with servers

AJAX is a developer's dream, because you can:
Update a web page without reloading the page
Request data from a server - after the page has loaded
Receive data from a server - after the page has loaded
Send data to a server - in the background
*/

/*
API: Application Programming Interface
  software intermediary that allows two applications to talk to each other.
  Each time you use an app like Facebook, send an instant message,
  or check the weather on your phone, you’re using an API.
 */


//First line check if the document is ready, so if every thing is loaded
$(function () {

    //Path to the order id, where text is inserted
    var $orders = $("#orders");

    //Path to drinks and name
    var $name = $("#name");
    var $drink = $("#drink");

    $.ajax({
        type: 'GET',

        //Input url or file path after the local host number
        url: '/jQueryTutorial/AJAX1/file.json',

        //To display on page
        success: function(data){
            //Each allows you to run through an array and run a function on each individual thing in the array
            // pass in an i (i=index of position in array), and the actual item
            $.each(data, function (i, item) {
                addOrder(item);
            })
        },
        error: function () {
            alert("Loading Error");
        }
    });

    function addOrder(order){
        $orders.append("<li>Name: " + item.name + ", Drink: " + item.drink + "</li>");
    }

    $("#add-order").on("click", function () {

        var order = {
            name: $name.val(),
            drink: $drink.val()
        };

        $.ajax({
            type: "POST",
            url: "/jQueryTutorial/AJAX1/file.json",
            data: order,
            success: function (newOrder) {
                $orders.append("<li>Name: " + $name.val() + ", Drink: " + $drink.val() + "</li>")
            },
            error: function () {
                alert("ERROR");
            }
        })
    })
})