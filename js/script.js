var userId = document.getElementById('userId');
var userPass = document.getElementById('userPass');
var loginBtn = document.getElementById('loginBtn');
var logoutBtn = document.getElementById('logoutBtn');
var contactName = document.getElementById('contactName');
var contactMail = document.getElementById('contactMail');
var contactTel = document.getElementById('contactTel');
var newUserBtn = document.getElementById('newUserBtn');

var contatti = [];
if (localStorage.getItem('contatti') != null) {
    contatti = JSON.parse(localStorage.getItem('contatti'));
}

loginBtn.addEventListener('click', login, false);
logoutBtn.addEventListener('click', logout, false);
newUserBtn.addEventListener('click', addContact, false);

function login(){

}

function logout(){

}

function addContact(){
    if (contactName.value.trim() != "" && contactMail.value.trim() != "" && contactTel.value.trim() != "") {
        var newContatto = {
            "name": contactName.value,
            "email": contactMail.value,
            "tel": contactTel.value
        };
        contatti.push(newContatto);

        // console.log(JSON.stringify(newContatto));
        localStorage.setItem('contatti', JSON.stringify(contatti));
    } else {

    }
}

function renderContacts(){

}

function enableEditing(){
    
}