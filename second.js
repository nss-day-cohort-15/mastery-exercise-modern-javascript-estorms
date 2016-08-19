'use strict';

//Set entire DOM-pop function to begin w/ page load

$(document).ready( () => {
     let fighter1;
     let fighter2;

     //Dropdowns and text input populate when doc ready

    $('#output').html(`
        <div class="row">
        <div class="container"><h1>FEED ME, LT: A GAME OF CANS</h1></div>
                <div class="row">
      <div class="col-lg-6">
        <div class="input-group">
          <div class="input-group-btn">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="butt1">Fighter 1 <span class="caret"></span></button>
            <ul class="dropdown-menu">
              <li class="feline1"><a href="#">Maggie</a></li>
              <li class="feline1"><a href="#">Boots</a></li>
              <li class="feline1"><a href="#">Dot</a></li>
              <li class="feline1"><a href="#">Belmont</a></li>
              <li class="feline1"><a href="#">Buddy</a></li>
              <li class="feline1"><a href="#">Sweetie</a></li>
            </ul>
          </div><!-- /btn-group -->
          <input type="text" class="form-control input" aria-label="..." id="input1">
        </div><!-- /input-group -->
        <div id="fighter1stats">
        </div><!-- fighter1stats -->
      </div><!-- /.col-lg-6 -->
      <div class="col-lg-6">
        <div class="input-group">
          <input type="text" class="form-control input" aria-label="..." id="input2">
          <div class="input-group-btn">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fighter 2 <span class="caret"></span></button>
            <ul class="dropdown-menu dropdown-menu-right">
              <li class="feline2"><a href="#">Maggie</a></li>
              <li class="feline2"><a href="#">Boots</a></li>
              <li class="feline2"><a href="#">Dot</a></li>
              <li class="feline2"><a href="#">Belmont</a></li>
              <li class="feline2"><a href="#">Buddy</a></li>
              <li class="feline2"><a href="#">Sweetie</a></li>
            </ul>
          </div><!-- /btn-group -->
        </div><!-- /input-group -->
          <div id="fighter2stats">
        </div><!-- fighter2stats -->
      </div><!-- /.col-lg-6 -->
    </div><!-- /.row -->
    <div id="fightresults"></div>
    <div class="row")>
    <div class="container">
    <button type="button" class="btn btn-default" id="attack">Attack</button>
    <button type="button" class="btn btn-default" id="again">Again</button>
    </div> <!--/container-->
    </div> <!--/row-->`)


    $('.feline1').click(makeFighter1);
    $('.feline2').click(makeFighter2);



    function makeFighter1 () {
        var text = $(this).text();
        var userName1 = $('#input1').val();
        fighter1 = new Tuckhouse.Combatants[text](userName1);
        printFighter1Stats(fighter1);
    }


    function makeFighter2 () {
        var text = $(this).text();
        var userName2 = $('#input2').val();
        fighter2 = new Tuckhouse.Combatants[text](userName2);
        printFighter2Stats(fighter2);
    }



    function printFighter1Stats(x){
          var fighterStats = `<div style="border: 1px dotted black; border-radius: 25px; padding: 10px; margin-top:10px; margin-bottom: 75px; margin-left: 25px; background-color: lightgrey;">${x.name} the ${x.title} weighs ${x.weight} pounds, would rather be ${x.preferences}, and, like all tiny sociopaths who poop in a box, always has a ${x.attitude} attitude. ${x.name} commands an indentured servant named ${x.indenturedServant}, who has kindly provided ${x.name} with <span style="color:red; font-weight: bolder">${x.hasCans}</span> cans.</div>`
          $("#fighter1stats").html(fighterStats);
    };

    function printFighter2Stats(x){
          var fighterStats = `<div style="border: 1px dotted black; border-radius: 25px; padding: 10px; margin-top:10px; margin-bottom: 75px; margin-left: 25px; background-color: lightgrey;">${x.name} the ${x.title} weighs ${x.weight} pounds, would rather be ${x.preferences}, and obviously has a ${x.attitude} attitude. ${x.name} also commands ${x.indenturedServant}, who has kindly provided ${x.name} with <span style="color:red; font-weight: bolder">${x.hasCans}</span> cans.</div>
    `
          $("#fighter2stats").html(fighterStats);
    };

    function attackMode () {

        fighter1.hasCans = fighter1.hasCans - fighter2.eatsCans;
        fighter2.hasCans = fighter2.hasCans - fighter1.eatsCans;
        printFighter1Stats(fighter1);
        printFighter2Stats(fighter2);
        if(fighter1.hasCans <= 0) {
            console.log('fighter1 loses')

            $('#fightresults').html(`Time to buy groceries, Luke! ${fighter1.name} is out of cans!`);
        };
        if(fighter2.hasCans <= 0){
            console.log('fighter2 loses')
            $('#fightresults').html(`Time to buy groceries, Luke! ${fighter2.name} is out of cans!`);
        };
    };

    $('#attack').click(attackMode);
    $('#again').click(again);

    //function to clear DOM and allow another fight

    function again() {
        $('#fightresults').empty();
        $('#fighter1stats').empty();
        $('#fighter2stats').empty();
        $('.input').val('');
    };
});


