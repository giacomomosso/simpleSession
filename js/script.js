var userId = document.getElementById('userId');
var userPass = document.getElementById('userPass');
var loginBtn = document.getElementById('loginBtn');
var logoutBtn = document.getElementById('logoutBtn');
var contactName = document.getElementById('contactName');
var contactMail = document.getElementById('contactMail');
var contactTel = document.getElementById('contactTel');
var newUserBtn = document.getElementById('newUserBtn');
var cardContainer = document.getElementById("cardContainer");
var cards;
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var contatti = [];
if (localStorage.getItem('contatti') != null) {
    contatti = JSON.parse(localStorage.getItem('contatti'));
}

loginBtn.addEventListener('click', login, false);
logoutBtn.addEventListener('click', logout, false);
newUserBtn.addEventListener('click', addContact, false);

login();
renderContacts();

function login() {
    if (Modernizr.localstorage) {
        var user = document.getElementById('userId').value;
        var password = document.getElementById('userPass').value;


        if (user == "admin" && password == "admin" || localStorage.getItem('session') == 'admin') {
            localStorage.setItem('session', "admin");
            console.log("logged: " + localStorage.getItem('session'));
            form3.hidden = false;
            form2.hidden = false;
            enableEditing();
        }

        if (user == "user" && password == "user" || localStorage.getItem('session') == 'user') {
            localStorage.setItem('session', "user");
            console.log("logged: " + localStorage.getItem('session'));
            form3.hidden = false;
            form1.hidden = true;
        }
    }
}

function logout() {
    if (localStorage.getItem('session') != null) {
        try {
            localStorage.removeItem("session");
            form1.hidden = false;
            form2.hidden = true;
            form3.hidden = true;
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log("session error 2");
    }
}

function addContact() {
    if (contactName.value.trim() != "" && contactMail.value.trim() != "" && contactTel.value.trim() != "") {
        var newContatto = {
            "id": contatti.length,
            "name": contactName.value,
            "email": contactMail.value,
            "tel": contactTel.value
        };
        contatti.push(newContatto);

        localStorage.setItem('contatti', JSON.stringify(contatti));
        console.log(localStorage.getItem('contatti'));
        renderContacts();
    } else {}
}

function renderContacts() {

    cardContainer.innerHTML = "";

    for (var obj of contatti) {

        console.log(obj);

        cardContainer.innerHTML +=
            '<div class="card" style="width: 18rem;" id="' + obj.id + '">' +
            '<ul class="list-group list-group-flush">' +
            '<li class="list-group-item1">' + obj.name + '</li>' +
            '<li class="list-group-item2">' + obj.email + '</li>' +
            '<li class="list-group-item2">' + obj.tel + '</li>' +
            '</ul>' +
            '</div>';

        cards = document.getElementsByClassName('card');

        for (let i = 0; i < cards.length; i++) {

            cards[i].addEventListener('click', deleteCard, false);
        }

    }
}


function enableEditing() {

    console.log(form1);
    if (Modernizr.localstorage) {
        if (localStorage.getItem("session") == "admin") {
            form1.hidden = true;
            form2.hidden = false;
        }
    }
}

function deleteCard() {
    var contatti2 = [];
    var id = parseInt(this.id);

    if (confirm('Vuoi rimuovere questo contatto?') == true) {
        
        contatti.forEach(element => {
            if (element.id == id) {

            } else {
                contatti2.push(element);
            }
        });

        contatti = contatti2;
        localStorage.setItem('contatti', JSON.stringify(contatti));

        renderContacts();
    }
}