function weekd() {
    var d = parseFloat(document.getElementById('day').value);
    var m = parseFloat(document.getElementById('month').value);
    var y = parseFloat(document.getElementById('year').value);
    var c = (y - 1) / 100 + 1;
    var dayoftheweek = (c / 4 - 2 * c - 1 + 5 * y / 4 + 26 * (m + 1) / 10 + d) % 7;
    console.log(Math.round(dayoftheweek));
    var gabo = ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"];
    var gore = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var choice = document.getElementById('select').value;
    if (d >= 31 || d <= 1) {

        alert("ivalid input enter days less than 31 or greater than 0");
    } else if (m > 12 || m <= 1) {
        alert("invalid input enter month less than 12 or greater than 0");
    } else {

        if (choice === "male") {
            console.log(gabo[Math.round(dayoftheweek)]);

            document.getElementById('akan').innerHTML = gabo[Math.round(dayoftheweek)];


        } else if (choice === "female") {


            console.log(gore[Math.round(dayoftheweek)]);
            document.getElementById('akan').innerHTML = gore[Math.round(dayoftheweek)];

        } else {
            alert("no information provided");

        }
    }

}