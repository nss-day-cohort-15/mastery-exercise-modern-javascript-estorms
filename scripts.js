$(document).ready( () => {
var fighter1;
var fighter2;

$('#output').html(`
            <div class="container">
            <h1>Feline Feed Me, LT</h1>
            </div>
            <div class="container-fluid" id="cont1">

            Feline Fighter #1:

            <input type="text" class="input" id="name1">
            <div class="dropdown" id="dropdown">
            <button class="btn btn-default dropdown-toggle butt" type="button" id="menu1" data-toggle="dropdown">Choose Your Feline<span class="caret"></span></button>
                 <ul class="dropdown-menu">
                    <li><a href="#" id="" class="feline1">Boots</a></li>
                    <li><a href="#" id="" class="feline1">Buddy</a></li>
                    <li><a href="#" id="" class="feline1">Sweetie</a></li>
                    <li><a href="#" id="" class="feline1">Maggie</a></li>
                    <li><a href="#" id="" class="feline1">Belmont</a></li>
                    <li><a href="#" id="" class="feline1">Dot</a></li>
                </ul>

                </div>
                </div>
                </div>

                <div id='fighter1stats'></div>

            <div class = "container-fluid pull-right" id="cont2">


            Feline Fighter #2

            <input type="text" class="input" id="name2">
            <div class="dropdown">
            <button class="btn btn-default dropdown-toggle butt" type="button" data-toggle="dropdown">Choose Your Feline<span class="caret"></span></button>
                 <ul class="dropdown-menu" pull-right>
                    <li><a href="#" id="" class="feline2">Boots</a></li>
                    <li><a href="#" id="" class="feline2">Buddy</a></li>
                    <li><a href="#" id="" class="feline2">Sweetie</a></li>
                    <li><a href="#" id="" class="feline2">Maggie</a></li>
                    <li><a href="#" id="" class="feline2">Belmont</a></li>
                    <li><a href="#" id="" class="feline2">Dot</a></li>
                 </div>
                </div>


                <div class="container-fluid">
                <div id='fighter2stats'></div>

                <div><button class="btn btn-default butt" type="button" id="attack">Attack to the Death</button>
                </div>
                <div class="container" id="fightresults"></div>
                </div>
                </div>`)

var fighter1;
 var fighter2;

$('.feline1').click( () => {
     userName1 = $('#name1').val();
     fighter1 = event.target.innerText;
        switch (fighter1) {
        case "Boots":
        fighter1 = new Tuckhouse.Combatants.Boots(userName1);
        break;

        case "Buddy":
        fighter1 = new Tuckhouse.Combatants.Buddy(userName1);
        break

        case "Sweetie":
        fighter1 = new Tuckhouse.Combatants.Sweetie(userName1);
        break

        case "Maggie":
        fighter1 = new Tuckhouse.Combatants.Maggie(userName1);
        break

        case "Belmont":
        fighter1 = new Tuckhouse.Combatants.Belmont(userName1);
        break

        case "Dot":
        fighter1 = new Tuckhouse.Combatants.Dot(userName1);
        break

        default:
        alert('somehow you broke my code!')

        }

console.log(fighter1)
printFighter1Stats(fighter1)
})

$('.feline2').click( () => {
     userName2 = $('#name2').val();
     fighter2 = event.target.innerText;
        switch (fighter2) {
        case "Boots":
        fighter2 = new Tuckhouse.Combatants.Boots(userName2);
        break;

        case "Buddy":
        fighter2 = new Tuckhouse.Combatants.Buddy(userName2);
        break

        case "Sweetie":
        fighter2 = new Tuckhouse.Combatants.Sweetie(userName2);
        break

        case "Maggie":
        fighter2 = new Tuckhouse.Combatants.Maggie(userName2);
        break

        case "Belmont":
        fighter2 = new Tuckhouse.Combatants.Belmont(userName2);
        break

        case "Dot":
        fighter2 = new Tuckhouse.Combatants.Dot(userName2);
        break

        default:
        alert('somehow you broke my code!')

        }

console.log(fighter2)
printFighter2Stats(fighter2)
})

function attackMode () {

    fighter1.hasCans = fighter1.hasCans - fighter2.eatsCans
    fighter2.hasCans = fighter2.hasCans - fighter1.eatsCans
    printFighter1Stats(fighter1)
    printFighter2Stats(fighter2)
    if(fighter1.hasCans <= 0) {
        console.log('fighter1 loses')
        $('#fightresults').html('fighter 1 loses')
        $('#fightresults').html(`Time to buy groceries, Luke! ${fighter2.name} ate all of ${fighter1.name}'s cans!`)
    }
    if(fighter2.hasCans <= 0){
        console.log('fighter2 loses')
        $('#fightresults').html(`Time to buy groceries, Luke! ${fighter1.name} ate all of ${fighter2.name}'s cans!`)
    }

}

function printFighter1Stats(x){
      var fighterStats = `<p>${x.name} the ${x.title}, whose attitude is always ${x.attitude}, has ${x.hasCans} cans</p>`
      $("#fighter1stats").html(fighterStats)
}

function printFighter2Stats(x){
      var fighterStats = `<p>${x.name} the ${x.title}, whose attitude is always ${x.attitude}, has ${x.hasCans} cans</p>`
      $("#fighter2stats").html(fighterStats)
}

$('#attack').click(attackMode)

})





/*
1. Finish attack function, including DOM print and fight continuance
2. Reset attack / new attack button
3. Const & ES features
4. Styling
5. Testing
6. Gulp
*/
