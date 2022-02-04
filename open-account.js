var arr = [];

function onApply() {
    var cname = document.getElementById("name").value;
    var cage = document.getElementById('age').value;
    var atype = document.getElementById('type').value;
    var bname = document.getElementById('bname').value;
    var mobile = document.getElementById('mobile').value;

    console.log("INN" + cname, cage, atype, bname, mobile);
    var cust = {
        "name": cname,
        "age": cage,
        "atype": atype,
        "bname": bname,
        "mobile": mobile,
    }
    arr.push(cust);
    statusTik("green");
    alert("Successfully Applied!")
}

function onDisplayNames() {
    document.getElementById("displayName").innerHTML = "";
    var tableElem = document.getElementById("displayName");

    for (let i = 0; i < arr.length; i++) {
        var col = 0;
        var newRow = tableElem.insertRow(i);
        var newCell = newRow.insertCell(col);
        var newText = document.createTextNode(arr[i]["name"]);
        newCell.appendChild(newText);
        var newCell = newRow.insertCell(col + 1);
        var newText = document.createTextNode(arr[i]["atype"]);
        newCell.appendChild(newText);
    }
    statusTik("blue");
}

function onDisplayAll() {
    document.getElementById("table").innerHTML = "";
    var tableElem = document.getElementById("table");

    for (let i = 0; i < arr.length; i++) {
        var col = 0;
        var newRow = tableElem.insertRow(i);
        var newCell = newRow.insertCell(col);
        var newText = document.createTextNode(arr[i]["name"]);
        newCell.appendChild(newText);
        var newCell = newRow.insertCell(col + 1);
        var newText = document.createTextNode(arr[i]["age"]);
        newCell.appendChild(newText);
        var newCell = newRow.insertCell(col + 2);
        var newText = document.createTextNode(arr[i]["atype"]);
        newCell.appendChild(newText);
        var newCell = newRow.insertCell(col + 3);
        var newText = document.createTextNode(arr[i]["bname"]);
        newCell.appendChild(newText);
        var newCell = newRow.insertCell(col + 4);
        var newText = document.createTextNode(arr[i]["mobile"]);
        newCell.appendChild(newText);
    }
    statusTik("blue");
}

var flag = true
document.getElementById("remove").innerText = "Remove";

function removeHide() {
    if (flag) {
        x = document.getElementById('rem');
        document.getElementById("remove").innerText = "Remove Exit";
        x.classList.remove("hide");
        x.className = 'show';
    } else {
        x = document.getElementById('rem');
        document.getElementById("remove").innerText = "Remove";
        x.classList.remove("show");
        x.className = 'hide';
    }
    flag = !flag;
}

function removeData() {
    var id = document.getElementById("removeID").value;
    arr.splice(id - 1, 1);
    statusTik("red");
}

function statusTik(statusColor) {
    document.getElementById('dot').style.backgroundColor = statusColor;
}