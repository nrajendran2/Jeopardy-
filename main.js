
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












