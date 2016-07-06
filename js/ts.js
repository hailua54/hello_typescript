var animal;
(function (animal) {
    var Animal = (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.sayHi = function () {
            console.log("Hi! I am Animal.");
        };
        return Animal;
    })();
    animal.Animal = Animal;
})(animal || (animal = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var animal;
(function (animal) {
    var Tiger = (function (_super) {
        __extends(Tiger, _super);
        function Tiger() {
            _super.apply(this, arguments);
        }
        Tiger.prototype.sayHi = function () {
            console.log("--------------------------------------------");
            _super.prototype.sayHi.call(this);
            console.log("Hi! I am Tiger " + this.name);
            console.log("--------------------------------------------");
        };
        return Tiger;
    })(animal.Animal);
    animal.Tiger = Tiger;
})(animal || (animal = {}));
var VUtils = eval("VUtils");
var ani = animal;
function main() {
    eval("trace")("hi from main");
    VUtils.print("hi from main");
    var t = new ani.Tiger("hailua");
    t.sayHi();
}
//# sourceMappingURL=ts.js.map