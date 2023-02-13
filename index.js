const readline = require("readline-sync")

function popcornHelper() {
  let popcornedArr = ["didier", "grace", "maghfoor", "ben", "zac", "tinashe", "josiah", "alli", "sinbad", "katrina", "maria"];
  while (true) {
    let popcorned = readline.question("Write who has been OR [2] Write 2 to pick someone random OR [q] Press q if done: ");
    if (popcorned === "2"){
      let randomPerson = pickRandomPerson(popcornedArr)
      console.log(randomPerson)
      popcornedArr = popcornedArr.filter((person) => randomPerson.toLowerCase() !== person.toLowerCase())
    }
    else if (popcorned === "q") {
      break
    }
    else{
      if (popcornedArr.includes(popcorned.toLowerCase())){
        popcornedArr = popcornedArr.filter((person) => popcorned.toLowerCase() !== person.toLowerCase())
        console.log(popcornedArr)
      }
      else{
        console.log("Check that you spelled the name correctly, the person hasn't been or the person is part of Academy's C6.")
      }
    }
  }
}
popcornHelper()

function pickRandomPerson(popcornedArr){
  const randomIndex = Math.floor(Math.random() * popcornedArr.length);
  return popcornedArr[randomIndex]
}

module.exports = popcornHelper