window.addEventListener('load',function() {
  var nameContact = document.getElementById('name');
  var  celContact = document.getElementById('cellphone');
  var btnSave = document.getElementById('save');
  var containerContact = document.getElementById('container-contact');

  btnSave.addEventListener('click', function(event){
    event.preventDefault();
  var newContact = document.createElement('li'); //este es el padre

  var newName = document.createElement('span');
  newName.setAttribute('class', 'contact-name');
  newName.textContent = nameContact.value;
  newContact.appendChild(newName);

  var newCel = document.createElement('span');
  newCel.setAttribute('class','contact-cellphone');
  newCel.textContent = celContact.value;
  newContact.appendChild(newCel);

  containerContact.insertBefore(newContact,containerContact.firstElementChild);

});

});
