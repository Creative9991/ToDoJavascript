var cnt = 1;
var edit = 0 ;

//add (or) creating an Employee Information

function addHtmlTableRow() {
    var table = document.getElementById("table"),
        newRow = table.insertRow(cnt),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        name= document.getElementById("name").value,
        email= document.getElementById("email").value,
        position= document.getElementById("position").value;
    cell1.innerHTML= name;
    cell2.innerHTML= email;
    cell3.innerHTML= position;
    cell4.innerHTML= '<INPUT type="button" value="Remove" onclick="removeSelectedRow('+cnt+')" />'+'<INPUT type="button" value="Edit" onclick="EditSelectedRow('+cnt+')" />';
    cnt = cnt + 1;
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("position").value = '';
}

//remove an Employee Details

function removeSelectedRow (cnt1) {
    var table = document.getElementById("table").deleteRow(cnt1);
    cnt = cnt - 1;
}

//edit an employee details

function EditSelectedRow (cnt1) {
    var x = document.getElementById("table").rows[cnt1].cells;
    document.getElementById("name").value = x[0].innerHTML;
    document.getElementById("email").value = x[1].innerHTML;
    document.getElementById("position").value = x[2].innerHTML;
    edit = cnt1;

}

function editHtmlTableRow() {

    var x = document.getElementById("table").rows[edit].cells;

    x[0].innerHTML = document.getElementById("name").value ;
    x[1].innerHTML = document.getElementById("email").value;
    x[2].innerHTML = document.getElementById("position").value;

    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("position").value = '';
    edit = 0;
}

