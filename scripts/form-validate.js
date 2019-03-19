"use strict";

window.addEventListener("load", function() {
    function sendData() {
        //const formData = new FormData(e.target);
        //console.log(formData);
        var XHR = new XMLHttpRequest();
        var FD  = new FormData(form);

        // Define what happens on successful data submission
        XHR.addEventListener('load', function(event) {
            console.log('Yeah! Data sent and response loaded.');
        });

        // Define what happens in case of error
        XHR.addEventListener('error', function(event) {
            console.log('Oops! Something went wrong.');
        });

        // Set up our request
        XHR.open('POST', 'http://localhost:8000/pages/cors.php', true);

        // Send our FormData object; HTTP headers are set automatically
        XHR.send(FD);
    }

    var form = document.querySelector('form');

    form.addEventListener('submit', ( e ) => {
        e.preventDefault();
        sendData();
    });
});
