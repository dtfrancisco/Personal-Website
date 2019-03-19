"use strict";

var form = document.querySelector('form');

form.addEventListener('submit', ( e ) => {
    e.preventDefault();
    /*var name = form.querySelector('input');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var message = document.getElementById('msg');
    console.log(name.value);
    console.log(email.value);
    console.log(subject.value);
    console.log(message.value);*/
    emailjs.sendForm('default_service', 'form', this);
});
