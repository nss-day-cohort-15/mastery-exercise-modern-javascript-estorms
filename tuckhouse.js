var Tuckhouse = (function (tuckhouse) {

tuckhouse.Combatants = {};

tuckhouse.Combatants.Cat = function() {

    this.hasCans = 100;
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
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 5 + 1);
    this.name = userName;
    this.title = 'boots'
    this.url = "http://placekitten.com/200/200"
}

tuckhouse.Combatants.Boots.prototype = new tuckhouse.Combatants.Percher();


tuckhouse.Combatants.Buddy = function (userName) {
    this.hasCans = this.hasCans + Math.floor(Math.random() * 1 + 6);
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 1 +  7);
    this.name = userName;
    this.title = 'buddy';
    this.url = 'http://placekitten.com/200/200'
}

tuckhouse.Combatants.Buddy.prototype = new tuckhouse.Combatants.Percher();

tuckhouse.Combatants.Sweetie = function (userName) {
    this.hasCans = this.hasCans + Math.floor(Math.random() * 1 + 9);
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 3 + 6);
    this.name = userName;
    this.title = 'sweetie';
    this.url = 'http://placekitten.com/200/200'
}

tuckhouse.Combatants.Sweetie.prototype = new tuckhouse.Combatants.Slinker();

tuckhouse.Combatants.Maggie = function (userName) {
    this.hasCans = this.hasCans + Math.floor(Math.random() * 1 + 11);
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 13 + 1);
    this.name = userName;
    this.title = 'maggie';
    this.url = 'http://placekitten.com/200/200'
}

tuckhouse.Combatants.Maggie.prototype = new tuckhouse.Combatants.Slinker();

tuckhouse.Combatants.Belmont = function (userName) {

    this.hasCans = this.hasCans + Math.floor(Math.random() * 1 + 9);
    this.eatsCans = this.eatsCans +Math.floor(Math.random() * 6 + 1);
    this.name = userName;
    this.title = 'belmont';
    this.url = 'http://placekitten.com/200/200'
}

tuckhouse.Combatants.Belmont.prototype = new tuckhouse.Combatants.Indifferent();

tuckhouse.Combatants.Dot = function (userName) {

    this.hasCans = this.hasCans + Math.floor(Math.random() * 1 + 77);
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 1 + 1);
    this.name = userName;
    this.title = 'dot';
    this.url = 'http://placekitten.com/g/200/200'
}

tuckhouse.Combatants.Dot.prototype = new tuckhouse.Combatants.Indifferent();

return tuckhouse;

})

(Tuckhouse || {});



