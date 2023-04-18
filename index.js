let homeScore = document.getElementById("home");
let guestScore = document.getElementById("guest");
let homeCount = 0;
let guestCount = 0;

function h1() {
  homeCount += 1;
  homeScore.textContent = homeCount;
  let updatedHome = homeCount;
  let updatedGuest = guestCount;
  if (updatedHome > guestCount) {
    //guest is red
    document.getElementById("guest").className = "red";
    document.getElementById("home").className = "green";
  } else if (updatedHome < guestCount) {
    //home is red
    document.getElementById("home").className = "red";
    document.getElementById("guest").className = "green";
  } else {
    document.getElementById("home").className = "green";
    document.getElementById("guest").className = "green";
  }
  // both green
}
function h2() {
  homeCount += 2;
  homeScore.textContent = homeCount;
  let updatedHome = homeCount;
  let updatedGuest = guestCount;
  if (updatedHome > guestCount) {
    //guest is red
    document.getElementById("guest").className = "red";
    document.getElementById("home").className = "green";
  } else if (updatedHome < guestCount) {
    //home is red
    document.getElementById("home").className = "red";
    document.getElementById("guest").className = "green";
  } else {
    document.getElementById("home").className = "green";
    document.getElementById("guest").className = "green";
  }
}
function h3() {
  homeCount += 3;
  homeScore.textContent = homeCount;
  let updatedHome = homeCount;
  let updatedGuest = guestCount;
  if (updatedHome > guestCount) {
    //guest is red
    document.getElementById("guest").className = "red";
    document.getElementById("home").className = "green";
  } else if (updatedHome < guestCount) {
    //home is red
    document.getElementById("home").className = "red";
    document.getElementById("guest").className = "green";
  } else {
    document.getElementById("home").className = "green";
    document.getElementById("guest").className = "green";
  }
}

function g1() {
  guestCount += 1;
  guestScore.textContent = guestCount;
  let updatedHome = homeCount;
  let updatedGuest = guestCount;
  if (updatedHome > guestCount) {
    //guest is red
    document.getElementById("guest").className = "red";
    document.getElementById("home").className = "green";
  } else if (updatedHome < guestCount) {
    //home is red
    document.getElementById("home").className = "red";
    document.getElementById("guest").className = "green";
  } else {
    document.getElementById("home").className = "green";
    document.getElementById("guest").className = "green";
  }
}
function g2() {
  guestCount += 2;
  guestScore.textContent = guestCount;
  let updatedHome = homeCount;
  let updatedGuest = guestCount;
  if (updatedHome > guestCount) {
    //guest is red
    document.getElementById("guest").className = "red";
    document.getElementById("home").className = "green";
  } else if (updatedHome < guestCount) {
    //home is red
    document.getElementById("home").className = "red";
    document.getElementById("guest").className = "green";
  } else {
    document.getElementById("home").className = "green";
    document.getElementById("guest").className = "green";
  }
}
function g3() {
  guestCount += 3;
  guestScore.textContent = guestCount;
  let updatedHome = homeCount;
  let updatedGuest = guestCount;
  if (updatedHome > guestCount) {
    //guest is red
    document.getElementById("guest").className = "red";
    document.getElementById("home").className = "green";
  } else if (updatedHome < guestCount) {
    //home is red
    document.getElementById("home").className = "red";
    document.getElementById("guest").className = "green";
  } else {
    document.getElementById("home").className = "green";
    document.getElementById("guest").className = "green";
  }
}

if (guestScore < homeScore) {
  document.getElementById("guest").classList.add(red);
}

function reset() {
  homeCount = 0;
  guestCount = 0;
  homeScore.textContent = 0;
  guestScore.textContent = 0;
  document.getElementById("home").className = "green";
  document.getElementById("guest").className = "green";
}
