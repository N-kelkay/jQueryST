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

$(function () {
    $.ajax({
        type: 'GET',
        utl: '/api/orders',

        //To display on page
        success: function(data){
            console.log('success', data);
        }
    });
})