'use strict'

$(document).ready( () => {
 let fighter1;
 let fighter2;

$('#output').html(`
            <div class="container">
            <h1>Feed Me, LT</h1>
            </div>
            <div class = "container">
            Name Your Feline Fighter 1:
            <input type="text" id="name1" class="input">
            <div class="dropdown pull-right" id="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Choose Your Feline 1 Type<span class="caret"></span></button>
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
                <div id='fighter1stats'></div>
            <div class= "container">
            Name Your Feline Fighter 2:
            <input type="text" id="name2" class="input">
            <div class="dropdown pull-right" id="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Choose Your Feline 2 Type<span class="caret"></span></button>
                 <ul class="dropdown-menu">
                    <li><a href="#" id="" class="feline2">Boots</a></li>
                    <li><a href="#" id="" class="feline2">Buddy</a></li>
                    <li><a href="#" id="" class="feline2">Sweetie</a></li>
                    <li><a href="#" id="" class="feline2">Maggie</a></li>
                    <li><a href="#" id="" class="feline2">Belmont</a></li>
                    <li><a href="#" id="" class="feline2">Dot</a></li>
                 </div>
                </div>
                <div id='fighter2stats'></div>
                <div class="container">
                <div><button class="btn btn-default butt" type="button" id="attack">Attack</button>
                </div>
                <div class="container" id="fightresults"></div>
                </div>
                </div>`)


$('.feline1').click( () => {
     var userName1 = $('#name1').val();
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
     var userName2 = $('#name2').val();
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
        $('#fightresults').html(`Time to buy groceries, Luke! ${fighter1.name} is out of cans!`)
    }
    if(fighter2.hasCans <= 0){
        console.log('fighter2 loses')
        $('#fightresults').html(`Time to buy groceries, Luke! ${fighter2.name} is out of cans!`)
    }

}

function printFighter1Stats(x){
      var fighterStats = `<p>${x.name} the ${x.title} weighs ${x.weight} pounds, prefers to be ${x.preferences}, and always has a ${x.attitude} attitude. ${x.name} commands an indentured servant named ${x.indenturedServant}, who has kindly provided ${x.name} with ${x.hasCans} cans.</p>`
      $("#fighter1stats").html(fighterStats)
}

function printFighter2Stats(x){
      var fighterStats = `<p>${x.name} the ${x.title} weighs ${x.length} feet long, prefers to be ${x.preferences}, and always has a ${x.attitude} attitude. ${x.name} also commands an indentured servant named ${x.indenturedServant}, who has kindly provided ${x.name} with ${x.hasCans} cans.</p>`
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
