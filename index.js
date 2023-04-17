let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")
let homeCount = 0
let guestCount = 0

function h1() {
    homeCount += 1
    homeScore.textContent = homeCount
    if (homeCount > guestCount) {
        document.getElementById("guest").classList.remove(score);
        document.getElementById("guest").classList.add(red);

    }
}
function h2() {
    homeCount += 2
    homeScore.textContent = homeCount
}
function h3() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function g1() {
    guestCount += 1
    guestScore.textContent = guestCount
}
function g2() {
    guestCount += 2
    guestScore.textContent = guestCount
}
function g3() {
    guestCount += 3
    guestScore.textContent = guestCount
}


if (guestScore < homeScore) {
    document.getElementById("guest").classList.add(red);
}

function reset () {
    homeCount = 0
    guestCount = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
  
}