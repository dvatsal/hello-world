var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Object.defineProperty(Greeter.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (msg) {
            this._title = msg;
        },
        enumerable: true,
        configurable: true
    });
    return Greeter;
}());
var greeter = new Greeter();
greeter.title = "Hello Vatsal";
console.log(greeter.title);
