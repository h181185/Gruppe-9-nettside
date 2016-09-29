function loadDoc() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var xml = xhttp.responseXML;
            writeData(xml);
        }
    }

    xhttp.open("GET", "Prosjektxml.xml", true);
    xhttp.send();
}


function writeData(xml) {

    if (xml) { //xml != null
        var elements = xml.getElementsByTagName("todo");
        var display = document.getElementById("display");
        var table = "<table><tr><th> Nøkkelen til godt samarbeid</th></tr>";
        for (i = 0; i < elements.length; i++) {
            table +=
                "<tr><td>" + elements[i].getElementsByTagName("Linker")[0].textContent + "</td></tr>";
        }
        table += "</table>";
        display.innerHTML = table;

    }
}