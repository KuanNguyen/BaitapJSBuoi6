function tinhGiaiThua(){
  var num =  document.getElementById("number").value;
  var gt = 1;

  for(var i = 1;i <= num;i++ ){
    gt = gt * i;
  }
  document.getElementById("alert3").innerHTML =gt;
}

document.getElementById("tinhGT").onclick = tinhGiaiThua;