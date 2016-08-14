var Tuckhouse = (function (tuckhouse) {

tuckhouse.Combatants = {};

tuckhouse.Combatants.Cat = function() {

    this.hasCans = 1;
    this.eatsCans = 1;
    this.preferences = null;
    this.indenturedServant = 'Luke';
    this.attitude = 'bad';

};

tuckhouse.Combatants.Percher = function () {
    this.preferences = 'up high'
    this.length = 9;
}

tuckhouse.Combatants.Percher.prototype = new tuckhouse.Combatants.Cat();

 tuckhouse.Combatants.Slinker = function () {
    this.preferences = 'down low'
}

tuckhouse.Combatants.Slinker.prototype = new tuckhouse.Combatants.Cat();

 tuckhouse.Combatants.Indifferent = function () {
    this.preferences = 'none'
}

tuckhouse.Combatants.Indifferent.prototype = new tuckhouse.Combatants.Cat();

tuckhouse.Combatants.Boots = function (userName) {
    this.hasCans = this.hasCans + Math.floor(Math.random() * 6 + 1);
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 6 + 1);
    this.name = userName;
    this.title = 'boots'
}

tuckhouse.Combatants.Boots.prototype = new tuckhouse.Combatants.Percher();


tuckhouse.Combatants.Buddy = function (userName) {
    this.hasCans = this.hasCans + Math.floor(Math.random() * 1 + 6);
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 1 + 6);
    this.name = userName;
}

tuckhouse.Combatants.Buddy.prototype = new tuckhouse.Combatants.Percher();

tuckhouse.Combatants.Sweetie = function () {
    this.hasCans = this.hasCans + Math.floor(Math.random() * 1 + 6);
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 1 + 6);
}

tuckhouse.Combatants.Sweetie.prototype = new tuckhouse.Combatants.Slinker();

tuckhouse.Combatants.Maggie = function () {
    this.hasCans = this.hasCans + Math.floor(Math.random() * 1 + 6);
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 6 + 1);
}

tuckhouse.Combatants.Maggie.prototype = new tuckhouse.Combatants.Slinker();

tuckhouse.Combatants.Belmont = function () {

    this.hasCans = this.hasCans + Math.floor(Math.random() * 1 + 6);
    this.eatsCans = this.eatsCans +Math.floor(Math.random() * 6 + 1);
}

tuckhouse.Combatants.Belmont.prototype = new tuckhouse.Combatants.Indifferent();

tuckhouse.Combatants.Dot = function () {

    this.hasCans = this.hasCans + Math.floor(Math.random() * 1 + 6);
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 6 + 1);
}

tuckhouse.Combatants.Dot.prototype = new tuckhouse.Combatants.Indifferent();

return tuckhouse;

})

(Tuckhouse || {});



