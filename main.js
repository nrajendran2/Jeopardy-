
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
    console.log("this worked")
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