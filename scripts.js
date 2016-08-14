$(document).ready( () => {

$('#output').html(`
            <div class="container">
            <h1>Feline Feed Me, LT</h1>
            </div>

            <div class = "container">
            Combatant1
            <input type="text" id="name1">
            <div class="dropdown" id="dropdown">

            <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Choose Your Feline<span class="caret"></span></button>
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


            <div class= "container">
            Combatant 2
            <input type="text" id="name2">
            <div class="dropdown" id="dropdown">

            <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Choose Your Feline<span class="caret"></span></button>
                 <ul class="dropdown-menu">
                    <li><a href="#" id="" class="feline2">Boots</a></li>
                    <li><a href="#" id="" class="feline2">Buddy</a></li>
                    <li><a href="#" id="" class="feline2">Sweetie</a></li>
                    <li><a href="#" id="" class="feline2">Maggie</a></li>
                    <li><a href="#" id="" class="feline2">Belmont</a></li>
                    <li><a href="#" id="" class="feline2">Dot</a></li>
                </ul>
                </div>
                </div>`)

$('.feline1').click( () => {
    let userName1 = $('#name1').val();
    let fighter1 = event.target.innerText;
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
})

$('.feline2').click( () => {
    let userName2 = $('#name2').val();
    let fighter2 = event.target.innerText;
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
})

})
