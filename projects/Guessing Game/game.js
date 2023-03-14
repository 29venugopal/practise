var myele = document.getElementById('root');
function numrandom() {
    var random = Math.floor(Math.random() * 6 + 1);
    console.log(Math.floor(Math.random() * 6 + 1));
    myele.innerHTML = "".concat(random);
}
