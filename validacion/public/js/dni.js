//-------------------DNI JavaScript
function calculateLetter (){
    var dniKey = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var position = document.getElementById("dni").value % 23;
    document.getElementById("letter").value = dniKey.charAt(position);
}

function clearForm () {
    document.getElementById("dni").value='';
    document.getElementById("letter").value='';
}

function submitForm () {
    if (validateForm()){
        calculateLetter();
    }
}

function validateForm() {
    var myfield = document.getElementById("dni");
    if (myfield.value.length == 0)   {
    alert("Error: Rellena el campo \"Número DNI\".");
    myfield.focus();
    return false;
    }
    if (myfield.value.length <= 6) {
        alert("Error: El campo \"Número DNI\" debe tener 7 u 8 carácteres");
        myfield.focus();
        return false;
    }
    return true;
}

function focusDNI() {
    document.getElementById("dni").focus();
}