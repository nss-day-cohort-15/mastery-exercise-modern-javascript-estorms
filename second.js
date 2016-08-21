'use strict';

//Random fighter generator, allow weapons
//styling

$(document).ready( () => {
     let fighter1;
     let fighter2;
     let f1x; //vars to check if fighters are made before fight begins ("fighter 1 exists")
     let f2x; //vars to check if fighters are made before fight begins ("fighter 2 exists")

     //Dropdowns and text input populate when doc ready

    $('#output').html(`
        <div class="row">
        <div class="container"><h1>FEED ME, LT: A GAME OF CANS</h1></div>
                <div class="row">
      <div class="col-lg-6">
       <img src="" id="fighter1pic" class="hidden">
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
              <li role="separator" class="divider"></li>
              <li class="feline1"><a href="#">I'm Too Lazy To Choose</a></li>
            </ul>
          </div><!-- /btn-group -->
          <input type="text" class="form-control input" aria-label="..." id="input1" placeholder="Fighter 1 Name">
        </div><!-- /input-group -->
        <div id="fighter1stats">
        </div><!-- fighter1stats -->
      </div><!-- /.col-lg-6 -->
      <div class="col-lg-6">
        <img src='' id="fighter2pic" class="hidden">
        <div id="input2div">
        <div class="input-group">

          <input type="text" class="form-control input" aria-label="..." id="input2" placeholder="Fighter 2 Name">
          <div class="input-group-btn">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fighter 2 <span class="caret"></span></button>
            <ul class="dropdown-menu dropdown-menu-right">
              <li class="feline2"><a href="#">Maggie</a></li>
              <li class="feline2"><a href="#">Boots</a></li>
              <li class="feline2"><a href="#">Dot</a></li>
              <li class="feline2"><a href="#">Belmont</a></li>
              <li class="feline2"><a href="#">Buddy</a></li>
              <li class="feline2"><a href="#">Sweetie</a></li>
              <li role="separator" class="divider"></li>
              <li class="feline2"><a href="#">I'm Too Lazy To Choose</a></li>
            </ul>
          </div><!-- /btn-group -->

        </div><!-- /input-group -->
        </div><!-- /input-2div -->
          <div id="fighter2stats">

        </div><!-- fighter2stats -->
      </div><!-- /.col-lg-6 -->
    </div><!-- /.row -->
    <div id="fightresults"></div>
    <div class="row")>
    <div class="container">
    <button type="button" class="btn btn-default" id="attack" style="margin-top: 10px">Attack</button>
    <button type="button" class="btn btn-default hidden" id="again" style="margin-top: 10px">Can't Get Enough 1999? Play Again</button>
    </div> <!--/container-->
    </div> <!--/row-->`);

//Listeners set on dropdown menu items will run create fighter functions on click

    $('.feline1').click(makeFighter1);
    $('.feline2').click(makeFighter2);


//Create fighter 1 function. User given directives if name hasn't been entered

//Make fighter 1, goes into effect if user has entered complete info

    function makeFighter1 () {
        if ($('#input1').val() !== '' && $(this).text() !== "I'm Too Lazy To Choose"){
        let text = $(this).text();
        let userName1 = $('#input1').val();
        fighter1 = new Tuckhouse.Combatants[text](userName1);
        printFighter1Stats(fighter1);
        f1x = true;
    }

//Make random type fighter 1 with

    else if ( $('#input1').val() !==''){
        let userName1 = $('#input1').val();
        console.log(userName1);
        var x = Tuckhouse.Combatants.Cat.randomize(userName1);
        fighter1 = x;
        printFighter1Stats(fighter1);
        f1x = true;

    }

//Directive to at least enter a name before moving forward

    else {
        $('#fighter1stats').html("No can do, kitten. Enter a name for your first fighter and then select its type.");
    }
    };

//Create fighter 2 function. Almost identical to fighter 1 function.

    function makeFighter2 () {
        if ($('#input2').val() !=='' && $(this).text() !== "I'm Too Lazy To Choose"){
        let text = $(this).text();
        let userName2 = $('#input2').val();
        fighter2 = new Tuckhouse.Combatants[text](userName2);
        printFighter2Stats(fighter2);
        f2x = true;
    }


    else if ( $('#input2').val() !==''){
        let userName2 = $('#input2').val();
        var x = Tuckhouse.Combatants.Cat.randomize(userName2);
        fighter2 = x;
        printFighter2Stats(fighter2);
        f2x = true;

    }

        else {
        $('#fighter2stats').html("No can do, kitten. Enter a name for your second fighter and then select its type.")
    }

    };


//Functions to print fighters 1 and 2 stats to DOM. These are both called twice: when fighters are first created and during fight itself, in order to reflect changes in fighter stats as fight function runs.

    function printFighter1Stats(x){
          let fighterStats = `<div style="border: 1px dotted black; border-radius: 25px; padding: 10px; margin-top:10px; background-color: lightgrey;">${x.name} the ${x.title} weighs ${x.weight} pounds, would rather be ${x.preferences}, and, like all tiny sociopaths who poop in a box, always has a ${x.attitude} attitude. ${x.name} commands an indentured servant named ${x.indenturedServant}, who has kindly provided ${x.name} with <span style="color:red; font-weight: bolder">${x.hasCans}</span> cans.</div>`
          $("#fighter1stats").html(fighterStats);
          $('#fighter1pic').removeClass('hidden').attr('src', x.image);
    };

    function printFighter2Stats(x){
          let fighterStats = `<div style="border: 1px dotted black; border-radius: 25px; padding: 10px; margin-top:10px; background-color: lightgrey;">${x.name} the ${x.title} weighs ${x.weight} pounds, would rather be ${x.preferences}, and obviously has a ${x.attitude} attitude. ${x.name} also commands ${x.indenturedServant}, who has kindly provided ${x.name} with <span style="color:red; font-weight: bolder">${x.hasCans}</span> cans.</div>`
          $("#fighter2stats").html(fighterStats);
          $('#fighter2pic').removeClass('hidden').attr('src', x.image);
    };

    //Attack function. Health('has cans') pitted against damage('eats cans') and results outputted to DOM when either fighter 'dies'.

    function attackMode () {

        if (f1x === true && f2x === true ) {
            fighter1.hasCans = fighter1.hasCans - fighter2.eatsCans;
            fighter2.hasCans = fighter2.hasCans - fighter1.eatsCans;
            printFighter1Stats(fighter1);
            printFighter2Stats(fighter2);
                if(fighter1.hasCans <= 0) {
                    $('#fightresults').html(`Time to buy groceries, Luke! ${fighter1.name} is out of cans!`);
                    $("#again").removeClass("hidden");
                    $("#attack").addClass("hidden");
                }

                if(fighter2.hasCans <= 0){
                    $('#fightresults').html(`Time to buy groceries, Luke! ${fighter2.name} is out of cans!`);
                    $("#again").removeClass("hidden");
                    $("#attack").addClass("hidden");
                }
            }
        else {
            alert("I can't do your work for you. Create two players.");
        }

        };

//Attack mode is called on click of attack button.

$('#attack').click(attackMode);

//Again mode is called on click of again button

$('#again').click(again);


//Again function to clear DOM and allow another fight: replaces "Attack" button with "Again"

    function again() {
        $('#fightresults').empty();
        $('#fighter1stats').empty();
        $('#fighter2stats').empty();
        $('.input').val('');
        $("#again").addClass("hidden");
        $("#attack").removeClass("hidden");
        $("#fighter2pic").addClass("hidden");
        $("#fighter1pic").addClass("hidden");
        f1x = false;
        f2x = false;
    };
});


