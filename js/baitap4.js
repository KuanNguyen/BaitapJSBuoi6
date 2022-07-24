function taoTheDiv() {
    var theDiv;
    var divContent;
    for (var i = 1; i < 10; i++) {
        theDiv = document.createElement("div");
        if (i % 2 == 0) {
            divContent = document.createTextNode(" số chẵn: " + i);
            theDiv.style.backgroundColor = "red";
            theDiv.style.color = "white";
        } else {
            divContent = document.createTextNode("số lẻ: " + i);
            theDiv.style.backgroundColor = "blue";
            theDiv.style.color = "white";
        }
        theDiv.appendChild(divContent);
        document.getElementById("alert4").appendChild(theDiv);
    }

}
document.querySelector('#taoThe').onclick = taoTheDiv;