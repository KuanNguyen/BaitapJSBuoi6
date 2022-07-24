function tinhtong() {
    var x = document.getElementById("x").value;
    var n = document.getElementById("n").value;
    var T = 1;
    var s =0;


   for(var i = 1;i <= n;i++){
        T = T * x;
        s = s + T; 
   }

    document.getElementById("alert2").innerHTML = s;
}

document.getElementById("tinh").onclick = tinhtong;