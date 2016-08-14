console.log('scripts connected')

$(document).ready(function (){

$('#output').html(`
            <div class="container">
            <h1>Feline Feed Me, LT</h1>
            </div>

            <div class = "container">
            Combatant1
            <input type = 'text'>
            <div class="dropdown" id="dropdown">

            <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Choose Your Feline<span class="caret"></span></button>
                 <ul class="dropdown-menu">
                    <li><a href="#" id="">Boots</a></li>
                    <li><a href="#" id="">Buddy</a></li>
                    <li><a href="#" id="">Sweetie</a></li>
                    <li><a href="#" id="">Maggie</a></li>
                    <li><a href="#" id="">Belmont</a></li>
                    <li><a href="#" id="">Dot</a></li>
                </ul>
                </div>
                </div>


            <div class= "container">
            Combatant 2
            <input type = 'text'>
            <div class="dropdown" id="dropdown">

            <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Choose Your Feline<span class="caret"></span></button>
                 <ul class="dropdown-menu">
                    <li><a href="#" id="">Boots</a></li>
                    <li><a href="#" id="">Buddy</a></li>
                    <li><a href="#" id="">Sweetie</a></li>
                    <li><a href="#" id="">Maggie</a></li>
                    <li><a href="#" id="">Belmont</a></li>
                    <li><a href="#" id="">Dot</a></li>
                </ul>
                </div>
                </div>`)
})
