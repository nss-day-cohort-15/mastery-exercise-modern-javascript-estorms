console.log('scripts connected')

$(document).ready(function (){

$('#output').html(`<div>Output working, bitches</div>`)

var Battledrome = (function(battledrome){

battledrome.Feline = function() {

    this.color = null;
    this.health = Math.floor(Math.random() * 10 + 40);
    this.damage = Math.floor(Math.random() * 6 + 10);
    this.attitude = null;

};

battledrome.Feline.prototype.setColor = function (newDescription) {
    this.description = newDescription
}


battledrome.Feline.prototype.setAttitude = function(newAttitude) {
  this.attitude = newAttitude;
}

return battledrome

})

(Battledrome || {})

})
