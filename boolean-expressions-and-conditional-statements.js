const readline = require('readline-sync');

let hasTorch = true;
let hasMap = false;
let hasSword = false;
let hasCompass = false;

console.log("You wake up in a dark forest.");
console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains" && hasTorch) {
  console.log("\nYou safely navigate through the dark mountains using your torch.");
  console.log("Suddenly, a dragon blocks the path! Nearby, you notice a glowing cave.");
  
  const mountainChoice = readline.question("Do you enter the 'cave' or try to 'fight'? ");
  
  if (mountainChoice === "cave") {
    console.log("\nInside the cave, you find an ancient chest containing a SWORD and a COMPASS!");
    hasSword = true;
    hasCompass = true;
    console.log("You grab the items. You feel much stronger now!");
  } else if (mountainChoice === "fight") {
    if (hasSword) {
      console.log("\nYou bravely defeat the dragon with your sword and secure the path! You win!");
    } else {
      console.log("\nYou have no weapon! The dragon defeats you. Game Over.");
    }
  } else {
    console.log("\nInvalid choice. You freeze in fear and get captured.");
  }

} else if (choice === "mountains" && !hasTorch) {
  console.log("\nIt's too dark to proceed. You decide to turn back.");

} else if (choice === "village" || hasMap) {
  console.log("\nYou find your way to the village.");
  console.log("A merchant offers you a compass and a map, but you must trade your torch for them.");
  
  const tradeChoice = readline.question("Do you trade your torch? (yes/no): ");
  
  if (tradeChoice === "yes") {
    hasTorch = false;
    hasMap = true;
    hasCompass = true;
    console.log("\nYou now have a map and a compass, but your torch is gone.");
  } else {
    console.log("\nYou kept your torch and walked away.");
  }

  console.log("\nTo leave the village, you must cross the Misty Desert.");
  if ((hasMap || hasCompass) && !hasTorch) {
    console.log("You safely navigate the desert using your new tools, even without light! Success!");
  } else if (hasTorch && !hasMap) {
    console.log("You have light, but without a map or compass, you wander into a sandstorm. Game Over.");
  } else {
    console.log("You successfully pass through the desert and complete your adventure!");
  }

} else {
  console.log("\nYou get lost and wander aimlessly.");
}

console.log("\nYour journey continues...");
