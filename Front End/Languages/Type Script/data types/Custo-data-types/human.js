var Human = /** @class */ (function () {
    function Human() {
        this.eyes = "2 eyes";
        this.nose = "1 nose";
        this.legs = "2 legs";
    }
    Human.prototype.witheyse = function () {
        console.log("watch");
    };
    return Human;
}());
var venu;
var oscar;
var adish = new Human();
console.log(adish);
console.log(adish.eyes);
