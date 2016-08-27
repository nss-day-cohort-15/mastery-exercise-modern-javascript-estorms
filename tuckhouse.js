'use strict';

//SET GLOBAL VAR TO CREATE PROTOTYPE CHAIN

var Tuckhouse = (function (tuckhouse) {

//declare empty object to hold cats ("robots")
tuckhouse.Combatants = {};

tuckhouse.Combatants.Cat = function() {

//set top of prototype chain (Cat constructor)

    this.hasCans = 50;
    this.eatsCans = 3;
    this.preferences = null;
    this.indenturedServant = 'Luke';
    this.attitude = 'bad';
    this.allowedModels = ['Boots', 'Buddy', 'Dot', 'Maggie', 'Belmont', 'Sweetie'];
    this.weapon = null;

};

//next level down on chain: types (Percher/Slinker/Indifferent Constructors)

tuckhouse.Combatants.Percher = function () {
    this.preferences = 'listening to Jamiroquai';
    this.weight = 25;
};

tuckhouse.Combatants.Percher.prototype = new tuckhouse.Combatants.Cat();

 tuckhouse.Combatants.Slinker = function () {
    this.preferences = 'eating your face';
    this.weight = 15;
};

tuckhouse.Combatants.Slinker.prototype = new tuckhouse.Combatants.Cat();

 tuckhouse.Combatants.Indifferent = function () {
    this.preferences = 'deep in the delicious muck of prototypal inheritance';
    this.weight = 30;
};

tuckhouse.Combatants.Indifferent.prototype = new tuckhouse.Combatants.Cat();

//Set last levels of prototype chain (2 "models" for each type of cat)

tuckhouse.Combatants.Boots = function (userName) {
    this.hasCans = this.hasCans + Math.floor(Math.random() * 6 + 1);
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 8 + 1);
    this.name = userName;
    this.title = 'Boots';
    this.image = 'grumpcat.jpg';

};

tuckhouse.Combatants.Boots.prototype = new tuckhouse.Combatants.Percher();


tuckhouse.Combatants.Buddy = function (userName) {
    this.hasCans = this.hasCans + Math.floor(Math.random() * 3 + 1);
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 4 + 7);
    this.name = userName;
    this.title = 'Buddy';
    this.image = 'hellcat.jpg';

};

tuckhouse.Combatants.Buddy.prototype = new tuckhouse.Combatants.Percher();

tuckhouse.Combatants.Sweetie = function (userName) {
    this.hasCans = this.hasCans + Math.floor(Math.random() * 8 + 1);
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 4 + 6);
    this.name = userName;
    this.title = 'Sweetie';
    this.image = "http://cdn77.sadanduseless.com/wp-content/uploads/2014/08/angry-cat9.jpg";

};

tuckhouse.Combatants.Sweetie.prototype = new tuckhouse.Combatants.Slinker();

tuckhouse.Combatants.Maggie = function (userName) {
    this.hasCans = this.hasCans + Math.floor(Math.random() * 5 + 8);
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 3 + 9);
    this.name = userName;
    this.title = 'Maggie';
    this.image = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0EqgUJUdjwleeHyrILrn587g9DIYRY4HXBOl29mj-0_j8SdN1ew";

};

tuckhouse.Combatants.Maggie.prototype = new tuckhouse.Combatants.Slinker();

tuckhouse.Combatants.Belmont = function (userName) {

    this.hasCans = this.hasCans + Math.floor(Math.random() * 10 + 3);
    this.eatsCans = this.eatsCans +Math.floor(Math.random() * 12 + 1);
    this.name = userName;
    this.title = 'Belmont';
    this.image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxWIdSJum-27wWh9J6lK5ngkZMtemC_UR0d40S6NOtjSwfwlz8Fg";

};

tuckhouse.Combatants.Belmont.prototype = new tuckhouse.Combatants.Indifferent();

tuckhouse.Combatants.Dot = function (userName) {

    this.hasCans = this.hasCans + Math.floor(Math.random() * 7 + 2);
    this.eatsCans = this.eatsCans + Math.floor(Math.random() * 3 + 15);
    this.name = userName;
    this.title = 'Dot';
    this.image= "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQoqn91Ut7eFiwz5dDIMvLmbquPDXR-ojT9MVDAVT0Eeo_gimhcFw";

};

tuckhouse.Combatants.Dot.prototype = new tuckhouse.Combatants.Indifferent();



tuckhouse.Combatants.Cat.randomize = function (userName){
    var newCat = new tuckhouse.Combatants.Cat();
    var randomNum = Math.round(Math.random() * (6 - 1) + 1);
    var randomModel = newCat.allowedModels[randomNum];
    var randomCat = new tuckhouse.Combatants[randomModel](userName);
    newCat = randomCat;
    // newCat.name = userName;
    return newCat;
}



return tuckhouse;

})

(Tuckhouse || {})
