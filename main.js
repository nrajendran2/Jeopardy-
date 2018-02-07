
//alert ("Hello World")
let questionsLeft = 20;
let totalPoints = 0;
$(() => {

    $('.finalquestion').hide('slow')

    $('#one').one("click", function () {
        console.log("this worked")
        let answer = prompt("Quarterback whom has won 5 Super Bowls with the Patriots  _____.")
        if (answer === "Tom Brady" || answer === "tom brady") {
            alert("Correct, +100")
            totalPoints += 100;
            $('.playerscore').html(`Score: ${totalPoints}`)
            $("#one").removeClass('question')
            $('#one').addClass('question3')

        } else {
            alert("Sorry, wrong answer -100")
            totalPoints -= 100;
            $('.playerscore').html(`Score: ${totalPoints}`)
            $("#one").removeClass('question')
            $('#one').addClass('question2')
        }

        questionsLeft -= 1;
        $('#one').attr('disabled', true);
        showFinalQuestion();
    })


})

$('#two').one("click", function () {
    let answer = prompt("The winner of the 2010 World Cup ")
    if (answer === "Spain" || answer === "spain" || answer === "Espana") {
        alert("Correct, +200")
        totalPoints += 200;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#two").removeClass('question')
        $('#two').addClass('question3')

    } else {
        alert("Sorry, wrong answer -200")
        totalPoints -= 200;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#two").removeClass('question')
        $('#two').addClass('question2')
    }
    questionsLeft -= 1;
    $('#two').attr('disabled', true);
    showFinalQuestion();
})


$('#three').one('click', function () {
    let answer = prompt("Last Ballon d'or winner before Lionel Messi or Cristiano Ronaldo ")
    if (answer === "KAKA" || answer === "Kaka") {
        alert("Correct, +300")
        totalPoints += 300;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#three").removeClass('question')
        $('#three').addClass('question3')
    } else {
        alert("Sorry, wrong answer -300")
        totalPoints -= 300;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#three").removeClass('question')
        $('#three').addClass('question2')
    }
    questionsLeft -= 1;
    $('#three').attr('disabled', true);
    showFinalQuestion();

})

$('#four').one('click', function () {
    let answer = prompt("Leading Rookie of The Year candidate from Australia ")
    if (answer === "ben simmons" || answer === "Ben Simmons") {
        alert("Correct, +400")
        totalPoints += 400;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#four").removeClass('question')
        $('#four').addClass('question3')
    } else {
        alert("Sorry, wrong answer -400")
        totalPoints -= 400;
        $('.playerscore').html(`Score: ${totalPoints}`)
    }
    $("#four").removeClass('question')
    $('#four').addClass('question2')
questionsLeft -= 1;
$('#four').attr('disabled', true);
showFinalQuestion();
})

$('#five').one('click', function () {
    let answer = prompt("First homegrown player for Atlanta United ")
    if (answer === "Andrew Carelton" || answer === "Carelton") {
        alert("Correct, +500")
        totalPoints += 500;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#five").removeClass('question')
        $('#five').addClass('question3')
    } else {
        alert("Sorry, wrong answer -500")
        totalPoints -= 500;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#five").removeClass('question')
        $('#five').addClass('question2')
    }
    questionsLeft -= 1;
    $('#five').attr('disabled', true);
    showFinalQuestion();



})

$('#historyone').one('click', function () {
    let answer = prompt("Evil leader of the Nazis ")
    if (answer === "Adolf Hitler" || answer === "Hitler") {
        alert("Correct, +100")
        totalPoints += 100;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#historyone").removeClass('question')
        $('#historyone').addClass('question3')
    } else {
        alert("Sorry, wrong answer -100")
        totalPoints -= 100;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#historyone").removeClass('question')
        $('#historyone').addClass('question2')
    }
    questionsLeft -= 1;
    $('#historyone').attr('disabled', true);
    showFinalQuestion();


})

$('#historytwo').one('click', function () {
    let answer = prompt("Name of the bombed ship that sparked USA to enter WWII ")
    if (answer === "Pearl Harbour" || answer === "Pearl Harbor") {
        alert("Correct, +200")
        totalPoints += 200;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#historytwo").removeClass('question')
        $('#historytwo').addClass('question3')
    } else {
        alert("Sorry, wrong answer -200")
        totalPoints -= 200;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#historytwo").removeClass('question')
        $('#historytwo').addClass('question2')
    }
    questionsLeft -= 1;
    $('#historytwo').attr('disabled', true);
    showFinalQuestion();


})

$('#historythree').one('click', function () {
    let answer = prompt("City that USA bombed in an effort to end WW2")
    if (answer === "hiroshima" || answer === "Hiroshima") {
        alert("Correct, +300")
        totalPoints += 300;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#historythree").removeClass('question')
        $('#historythree').addClass('question3')
    } else {
        alert("Sorry, wrong answer -300")
        totalPoints -= 300;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#historythree").removeClass('question')
        $('#historythree').addClass('question2')
    }
    questionsLeft -= 1;
    $('#historythree').attr('disabled', true);
    showFinalQuestion();

})

$('#historyfour').one('click', function () {
    let answer = prompt("The most publicly known account of a Jew during the Holocaust. Famous for her diaries ")
    if (answer === "Anne Frank" || answer === "anne frank") {
        alert("Correct, +400")
        totalPoints += 400;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#historyfour").removeClass('question')
        $('#historyfour').addClass('question3')
    } else {
        alert("Sorry, wrong answer -400")
        totalPoints -= 400;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#historyfour").removeClass('question')
        $('#historyfour').addClass('question2')
    }
    questionsLeft -= 1;
    $('#historyfour').attr('disabled', true);
    showFinalQuestion();

})

$('#historyfive').one('click', function () {
    let answer = prompt("Leader of the Soviet Union who joined the Axis Powers ")
    if (answer === "Joseph Stalin" || answer === "Stalin") {
        alert("Correct, +500")
        totalPoints += 500;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#historyfive").removeClass('question')
        $('#historyfive').addClass('question3')
    } else {
        alert("Sorry, wrong answer -100")
        totalPoints -= 500;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#historyfive").removeClass('question')
        $('#historyfive').addClass('question2')
    }
    questionsLeft -= 1;
    $('#historyfive').attr('disabled', true);
    showFinalQuestion();


})
$('#musicone').one('click', function () {
    let answer = prompt("Sings hit me baby one more time ")
    if (answer === "Brittany Spears" || answer === "brittany spears") {
        alert("Correct, +100")
        totalPoints += 100;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#musicone").removeClass('question')
        $('#musicone').addClass('question3')
    } else {
        alert("Sorry, wrong answer -100")
        totalPoints -= 100;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#musicone").removeClass('question')
        $('#musicone').addClass('question2')
    }
    questionsLeft -= 1;
    $('#musicone').attr('disabled', true);
    showFinalQuestion();


})


$('#musictwo').one('click', function () {
    let answer = prompt("First female rapper to have three songs in Apple Music top 10 ")
    if (answer === "Bardi Cardi" || answer === "Cardi B") {
        alert("Correct, +200")
        totalPoints += 200;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#musictwo").removeClass('question')
        $('#musictwo').addClass('question3')
    } else {
        alert("Sorry, wrong answer -200")
        totalPoints -= 200;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#musictwo").removeClass('question')
        $('#musictwo').addClass('question2')
    }
    questionsLeft -= 1;
    $('#musictwo').attr('disabled', true);
    showFinalQuestion();

})

$('#musicthree').one('click', function () {
    let answer = prompt("First platinum song was Magnolia ")
    if (answer === "Carti" || answer === "Playboi Carti") {
        alert("Correct, +300")
        totalPoints += 300;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#musicthree").removeClass('question')
        $('#musicthree').addClass('question3')
    } else {
        alert("Sorry, wrong answer -300")
        totalPoints -= 300;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#musicthree").removeClass('question')
        $('#musicthree').addClass('question2')

    }
    questionsLeft -= 1;
    $('#musicthree').attr('disabled', true);
    showFinalQuestion();

})

$('#musicfour').one('click', function () {
    let answer = prompt("The third memember of Migos after Offset and Quavo Huncho  ")
    if (answer === "takeoff" || answer === "Takeoff") {
        alert("Correct, +400")
        totalPoints += 400;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#musicfour").removeClass('question')
        $('#musicfour').addClass('question3')
    } else {
        alert("Sorry, wrong answer -400")
        totalPoints -= 400;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#musicfour").removeClass('question')
        $('#musicfour').addClass('question2')
    }
    questionsLeft -= 1;
    $('#musicfour').attr('disabled', true);
    showFinalQuestion();

})

$('#musicfive').one('click', function () {
    let answer = prompt("His song LSD was based off the movie Enter the Void ")
    if (answer === "A$AP Rocky" || answer === "ASAP Rocky" || answer === "Rocky") {
        alert("Correct, +500")
        totalPoints += 500;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#musicfive").removeClass('question')
        $('#musicfive').addClass('question3')
    } else {
        alert("Sorry, wrong answer -500")
        totalPoints -= 500;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#musicfive").removeClass('question')
        $('#musicfive').addClass('question2')
    }
    questionsLeft -= 1;
    $('#musicfive').attr('disabled', true);
    showFinalQuestion();

})

$('#moviesone').one('click', function () {
    let answer = prompt("Movie about toys that come alive, led by a cowoboy and astrouant")
    if (answer === "Toy Story" || answer === "toy story") {
        alert("Correct, +100")
        totalPoints += 100;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#moviesone").removeClass('question')
        $('#moviesone').addClass('question3')
    } else {
        alert("Sorry, wrong answer -100")
        totalPoints -= 100;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#moviesone").removeClass('question')
        $('#moviesone').addClass('question2')
    }
    questionsLeft -= 1;
    $('#moviesone').attr('disabled', true);
    showFinalQuestion();

})


$('#moviestwo').one('click', function () {
    let answer = prompt("Two grown men suddendly become brothers")
    if (answer === "StepBrothers" || answer === "stepbrothers" || answer === "Stepbrothers") {
        alert("Correct, +200")
        totalPoints += 200;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#moviestwo").removeClass('question')
        $('#moviestwo').addClass('question3')
    } else {
        alert("Sorry, wrong answer -200")
        totalPoints -= 200;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#moviestwo").removeClass('question')
        $('#moviestwo').addClass('question2')

    }
    questionsLeft -= 1;
    $('#moviestwo').attr('disabled', true);
    showFinalQuestion();

})

$('#moviesthree').one('click', function () {
    let answer = prompt("Top grossing movie in 2012")
    if (answer === "The Dark Knight" || answer === "the dark knight") {
        alert("Correct, +300")
        totalPoints += 300;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#moviesthree").removeClass('question')
        $('#moviesthree').addClass('question3')
    } else {
        alert("Sorry, wrong answer -300")
        totalPoints -= 300;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#moviesthree").removeClass('question')
        $('#moviesthree').addClass('question2')
    }
    questionsLeft -= 1;
    $('#moviesthree').attr('disabled', true);

    showFinalQuestion();

})

$('#moviesfour').one('click', function () {
    let answer = prompt("Actor who passed in the midst of recording the seventh sequel ")
    if (answer === "Paul Walker" || answer === "paul walker") {
        alert("Correct, +400")
        totalPoints += 400;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#moviesfour").removeClass('question')
        $('#moviesfour').addClass('question3')
    } else {
        alert("Sorry, wrong answer -400")
        totalPoints -= 400;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#moviesfour").removeClass('question')
        $('#moviesfour').addClass('question2')
    }
    questionsLeft -= 1;
    $('#moviesfour').attr('disabled', true);

    showFinalQuestion();
})

$('#moviesfive').one('click', function () {
    let answer = prompt("Movie series where two roomates are Indian and Chinese")
    if (answer === "Harold and Kumar" || answer === "harold and kumar") {
        alert("Correct, +500")
        totalPoints += 500;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#moviesfive").removeClass('question')
        $('#moviesfive').addClass('question3')
    } else {
        alert("Sorry, wrong answer -500")
        totalPoints -= 500;
        $('.playerscore').html(`Score: ${totalPoints}`)
        $("#moviesfive").removeClass('question')
        $('#moviesfive').addClass('question2')
    }
    questionsLeft -= 1;
    $('#moviesfive').attr('disabled', true);

    showFinalQuestion();

})
let showFinalQuestion = function () {
    if (questionsLeft === 0) {
        $('.finalquestion').show('slow')
        
    }
    console.log("I run on the load of the page")
}
showFinalQuestion();

$('.finalquestion').click(function () {
    if (questionsLeft === 0) {
    alert("Congratulations, THIS IS THE FINAL CARD!!")
        let answer = prompt("Who is the 'best rapper alive'")
        if (answer === "Lil Wayne" || answer === "Wayne") {
            alert("Correct, +1000")
            totalPoints += 1000;
            $('.playerscore').html(`Score: ${totalPoints}`)
            $(".finalquestion").removeClass('question')
            $('.finalquestion').addClass('question3')

        } else {
            alert("Sorry, wrong answer -1000")
            totalPoints -= 1000;
            $('.playerscore').html(`Score: ${totalPoints}`)
            $(".finalquestion").removeClass('question')
            $('.finalquestion').addClass('question2')
        }
    }
    //$('.finalquestion').attr('disabled', true);
    
})





