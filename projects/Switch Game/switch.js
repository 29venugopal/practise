var myele1 = document.getElementById('root');
function day() {
    var random = Math.floor(Math.random() * 7 + 1);
    switch (random) {
        case 1:
            myele1.innerHTML = "MONDAY";
            break;
        case 2:
            myele1.innerHTML = "tuseday";
            break;
        case 3:
            myele1.innerHTML = "wednesday";
            break;
        case 4:
            myele1.innerHTML = "thiresday";
            break;
        case 5:
            myele1.innerHTML = "friday";
            break;
        case 6:
            myele1.innerHTML = "saturday";
            break;
        case 7:
            myele1.innerHTML = "sunday";
            break;
    }
}
