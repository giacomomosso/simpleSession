



function login(){
}

function logout(){

}

function addContact(){ 
  
  
}


function renderContacts(){
  var data = localStorage.getItem('contatti');
  JSON.parse(contatti)
  
  var name=document.getAttribute("list-group-itel1").innerHTML
  var email=document.getAttribute("list-group-item2").innerHTML
  var tel=document.getAttribute("list-group-item3").innerHTML
  
  data.forEach( contactName =>  {name += contactName.value });
  data.forEach(contactMail => {email += contactMail.value });
  data.forEach(contactTel => {tel += contactTel.value });
}

function enableEditing(){
}