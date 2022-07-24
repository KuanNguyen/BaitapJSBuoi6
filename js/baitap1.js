function soNDNN() {
    var sum = 0;
    var n = 0;

    while (sum < 10000) {
        n++;

        sum = n + sum;

    }
    document.getElementById("alert1").innerHTML = n;

}

document.getElementById("tim").onclick = soNDNN;
