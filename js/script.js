var data = [];

document.getElementById("loginBtn").addEventListener("click", displayDate);

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
(sessionStorage.loggedIn) ? console.log("Sei loggato") : console.log("Sei offline");;