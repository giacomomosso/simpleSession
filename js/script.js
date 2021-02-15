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

function login(){
    if (Modernizr.localstorage) {
        var user = document.getElementById('userId');
        var password = document.getElementById('userPass');
    
        if(user=="admin"&&password=="admin"){
            localStorage.setItem('session',"admin");
        }
    
        if(user=="user"&&password=="user"){
            localStorage.setItem('session', "user" );
        }
    }
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



//TEST SUPPORTO
function isSupportato() {
    try {
        localStorage.setItem('test', 'Hello Local');
        sessionStorage.setItem('loggedIn', true);
        return true;
    } catch (error) {
        return false;
    }
}

if (isSupportato()) {
    console.log("I local e session sono supportati");
}

//Controllo su utente loggato
// sessionStorage.removeItem
// (sessionStorage.loggedIn) ? console.log("Sei loggato") : console.log("Sei offline");
