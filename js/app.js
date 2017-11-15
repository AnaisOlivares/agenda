window.addEventListener('load', function () {
  var nameContact = document.getElementById('name');
  var celContact = document.getElementById('celphone');
  var btnSave = document.getElementById('save');
  var containerContact = document.getElementById('container-contact');

  function addContact(inputName, inputCel) {
    var newContact = document.createElement('div');

    var newName = document.createElement('span');
    newName.textContent = inputName;
    newContact.appendChild(newName);

    var newCel = document.createElement('span');
    newCel.textContent = inputCel;
    newContact.appendChild(newCel);

    containerContact.insertBefore(newContact, containerContact.childNodes[0]);
  }

  btnSave.addEventListener('click', function() {
    addContact(nameContact.value, celContact.value);
  });

});