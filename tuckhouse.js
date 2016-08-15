var Tuckhouse = (function (tuckhouse) {

tuckhouse.Combatants = {};

tuckhouse.Combatants.Cat = function() {

    this.hasCans = 50;
    this.eatsCans = null;
    this.preferences = null;
    this.indenturedServant = 'Luke';
    this.attitude = 'bad';

};

tuckhouse.Combatants.Percher = function () {
    this.preferences = 'eating your soul'
    this.weight = 25;
}

tuckhouse.Combatants.Percher.prototype = new tuckhouse.Combatants.Cat();

 tuckhouse.Combatants.Slinker = function () {
    this.preferences = 'eating your face'
    this.weight = 15;
}

tuckhouse.Combatants.Slinker.prototype = new tuckhouse.Combatants.Cat();

 tuckhouse.Combatants.Indifferent = function () {
    this.preferences = 'deep in the delicious muck of prototypal inheritance'
    this.weight = 30;
}

tuckhouse.Combatants.Indifferent.prototype = new tuckhouse.Combatants.Cat();

tuckhouse.Combatants.Boots = function (userName) {
    this.hasCans = this.hasCans + Math.floor(Math.random() * 60 + 1);
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 50 + 1);
    this.name = userName;
    this.title = 'Boots'

}

tuckhouse.Combatants.Boots.prototype = new tuckhouse.Combatants.Percher();


tuckhouse.Combatants.Buddy = function (userName) {
    this.hasCans = this.hasCans + Math.floor(Math.random() * 30 + 6);
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 40 +  7);
    this.name = userName;
    this.title = 'Buddy';

}

tuckhouse.Combatants.Buddy.prototype = new tuckhouse.Combatants.Percher();

tuckhouse.Combatants.Sweetie = function (userName) {
    this.hasCans = this.hasCans + Math.floor(Math.random() * 11 + 99);
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 50 + 6);
    this.name = userName;
    this.title = 'Sweetie';

}

tuckhouse.Combatants.Sweetie.prototype = new tuckhouse.Combatants.Slinker();

tuckhouse.Combatants.Maggie = function (userName) {
    this.hasCans = this.hasCans + Math.floor(Math.random() * 1 + 27);
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 30 + 99);
    this.name = userName;
    this.title = 'Maggie';

}

tuckhouse.Combatants.Maggie.prototype = new tuckhouse.Combatants.Slinker();

tuckhouse.Combatants.Belmont = function (userName) {

    this.hasCans = this.hasCans + Math.floor(Math.random() * 10 + 50);
    this.eatsCans = this.eatsCans +Math.floor(Math.random() * 16 + 10);
    this.name = userName;
    this.title = 'Belmont';

}

tuckhouse.Combatants.Belmont.prototype = new tuckhouse.Combatants.Indifferent();

tuckhouse.Combatants.Dot = function (userName) {

    this.hasCans = this.hasCans + Math.floor(Math.random() * 77 + 18);
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 1 + 15);
    this.name = userName;
    this.title = 'Dot';

}

tuckhouse.Combatants.Dot.prototype = new tuckhouse.Combatants.Indifferent();

return tuckhouse;

})

(Tuckhouse || {});
