
//alert ("Hello World")

let totalPoints = 0;
$(() => {
    $('#one').click(function () {
        console.log("this worked")
        let answer = prompt("Quarterback whom has won 5 Super Bowls with the Patriots  _____.")
        if (answer === "Tom Brady" || answer === "tom brady") {
            alert("Correct, +100")
            totalPoints += 100;
            $('.playerscore').html(`Score: ${totalPoints}`)
        } else {
            alert("Sorry, wrong answer -100")
            totalPoints -= 100;
            $('.playerscore').html(`Score: ${totalPoints}`)
        }
    })
})

$('#two').click(function () {
    let answer = prompt("The winner of the 2010 World Cup ")
    if (answer === "Spain" || answer === "spain" || answer === "Espana") {
        alert("Correct, +200")
        totalPoints += 200;
        $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert("Sorry, wrong answer -200")
        totalPoints -= 200;
        $('.playerscore').html(`Score: ${totalPoints}`)
    }
})

$('#three').click(function () {
    let answer = prompt("Last Ballon d'or winner before Lionel Messi or Cristiano Ronaldo ")
    if (answer === "KAKA" || answer === "Kaka") {
        alert("Correct, +300")
        totalPoints += 300;
        $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert("Sorry, wrong answer -300")
        totalPoints -= 300;
        $('.playerscore').html(`Score: ${totalPoints}`)
    }
})

$('#four').click(function () {
    let answer = prompt("Leading Rookie of The Year candidate from Australia ")
    if (answer === "ben simmons" || answer === "Ben Simmons") {
        alert("Correct, +400")
        totalPoints += 400;
        $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert("Sorry, wrong answer -400")
        totalPoints -= 400;
        $('.playerscore').html(`Score: ${totalPoints}`)
    }
})

$('#five').click(function () {
    let answer = prompt("First homegrown player for Atlanta United ")
    if (answer === "Andrew Carelton" || answer === "Carelton") {
        alert("Correct, +500")
        totalPoints += 500;
        $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert("Sorry, wrong answer -500")
        totalPoints -= 500;
        $('.playerscore').html(`Score: ${totalPoints}`)
    }
})

$('#historyone').click(function () {
    let answer = prompt("Evil leader of the Nazis ")
    if (answer === "Adolf Hitler" || answer === "Hitler") {
        alert("Correct, +100")
        totalPoints += 100;
        $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert("Sorry, wrong answer -100")
        totalPoints -= 100;
        $('.playerscore').html(`Score: ${totalPoints}`)
    }
})

$('#historytwo').click(function () {
    let answer = prompt("Name of the bombed ship that sparked USA to enter WWII ")
    if (answer === "Pearl Harbour" || answer === "Pearl Harbor") {
        alert("Correct, +200")
        totalPoints += 200;
        $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert("Sorry, wrong answer -200")
        totalPoints -= 200;
        $('.playerscore').html(`Score: ${totalPoints}`)
    }
})

$('#historythree').click(function () {
    let answer = prompt("City that USA bombed in an effort to end WW2")
    if (answer === "hiroshima" || answer === "Hiroshima") {
        alert("Correct, +300")
        totalPoints += 300;
        $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert("Sorry, wrong answer -300")
        totalPoints -= 300;
        $('.playerscore').html(`Score: ${totalPoints}`)
    }
})

$('#historyfour').click(function () {
    let answer = prompt("The most publicly known account of a Jew during the Holocaust. Famous for her diaries ")
    if (answer === "Anne Frank" || answer === "anne frank") {
        alert("Correct, +400")
        totalPoints += 400;
        $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert("Sorry, wrong answer -400")
        totalPoints -= 400;
        $('.playerscore').html(`Score: ${totalPoints}`)
    }
})

$('#historyfive').click(function () {
    let answer = prompt("Leader of the Soviet Union who joined the Axis Powers ")
    if (answer === "Joseph Stalin" || answer === "Stalin") {
        alert("Correct, +500")
        totalPoints += 500;
        $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert("Sorry, wrong answer -100")
        totalPoints -= 500;
        $('.playerscore').html(`Score: ${totalPoints}`)
    }
})
$('#musicone').click(function () {
    let answer = prompt("Sings hit me baby one more time ")
    if (answer === "Brittany Spears" || answer === "brittany spears") {
        alert("Correct, +100")
        totalPoints += 100;
        $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert("Sorry, wrong answer -100")
        totalPoints -= 100;
        $('.playerscore').html(`Score: ${totalPoints}`)
    }
})


$('#musictwo').click(function () {
    let answer = prompt("First female rapper to have three songs in Apple Music top 10 ")
    if (answer === "Bardi Cardi" || answer === "Cardi B") {
        alert("Correct, +200")
        totalPoints += 200;
        $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert("Sorry, wrong answer -200")
        totalPoints -= 200;
        $('.playerscore').html(`Score: ${totalPoints}`)
    }
})

$('#musicthree').click(function () {
    let answer = prompt("First platinum song was Magnolia ")
    if (answer === "Carti" || answer === "Playboi Carti") {
        alert("Correct, +300")
        totalPoints += 300;
        $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert("Sorry, wrong answer -300")
        totalPoints -= 300;
        $('.playerscore').html(`Score: ${totalPoints}`)
    }
})

$('#musicfour').click(function () {
    let answer = prompt("The third memember of Migos after Offset and Quavo Huncho  ")
    if (answer === "takeoff" || answer === "Takeoff") {
        alert("Correct, +400")
        totalPoints += 400;
        $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert("Sorry, wrong answer -400")
        totalPoints -= 400;
        $('.playerscore').html(`Score: ${totalPoints}`)
    }
})

$('#musicfive').click(function () {
    let answer = prompt("His song LSD was based off the movie Enter the Void ")
    if (answer === "A$AP Rocky" || answer === "ASAP Rocky" || answer === "Rocky") {
        alert("Correct, +500")
        totalPoints += 500;
        $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert("Sorry, wrong answer -500")
        totalPoints -= 500;
        $('.playerscore').html(`Score: ${totalPoints}`)
    }
})

$('#moviesone').click(function () {
    let answer = prompt("Movie about toys that come alive, led by a cowoboy and astrouant")
    if (answer === "Toy Story" || answer === "toy story") {
        alert("Correct, +100")
        totalPoints += 100;
        $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert("Sorry, wrong answer -100")
        totalPoints -= 100;
        $('.playerscore').html(`Score: ${totalPoints}`)
    }
})


$('#moviestwo').click(function () {
    let answer = prompt("Two grown men suddendly become brothers")
    if (answer === "StepBrothers" || answer === "stepbrothers" || answer === "Stepbrothers") {
        alert("Correct, +200")
        totalPoints += 200;
        $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert("Sorry, wrong answer -200")
        totalPoints -= 200;
        $('.playerscore').html(`Score: ${totalPoints}`)
    }
})

$('#moviesthree').click(function () {
    let answer = prompt("Top grossing movie in 2012")
    if (answer === "The Dark Knight" || answer === "the dark knight") {
        alert("Correct, +300")
        totalPoints += 300;
        $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert("Sorry, wrong answer -300")
        totalPoints -= 300;
        $('.playerscore').html(`Score: ${totalPoints}`)
    }
})

$('#moviesfour').click(function () {
    let answer = prompt("Actor who passed in the midst of recording the seventh sequel ")
    if (answer === "Paul Walker" || answer === "paul walker") {
        alert("Correct, +400")
        totalPoints += 400;
        $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert("Sorry, wrong answer -400")
        totalPoints -= 400;
        $('.playerscore').html(`Score: ${totalPoints}`)
    }
})







