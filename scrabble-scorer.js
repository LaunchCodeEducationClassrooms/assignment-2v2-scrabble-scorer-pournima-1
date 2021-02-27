// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");


const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let newPointStructure = transform(oldPointStructure);

//const input = require("readline-sync");
function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	//let letterPoints = "";
  let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			//letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      letterPoints += Number(pointValue);
		 }
 
	  }
	}
	return letterPoints;
 }

 function newScrabbleScorer(word) {
   word = word.toLowerCase();
  let letterPoints = 0;
 	for (let i = 0; i < word.length; i++) {
    letterPoints += Number(newPointStructure[word[i]]);
    }
	return letterPoints;
 }

 function simpleScoreCalc(word) {
   word = word.toUpperCase();
   let simpleScorePoints = 0;
   for (let j = 0; j < word.length; j++) {
     simpleScorePoints++;
   }
   return simpleScorePoints;
 }
 
 function vowelBonusScoreCalc(word){
   word = word.toUpperCase();
   let arrVowels= ['A','E','I','O','U'];
   let vowelScorePoints =0;
   for(let k=0; k<word.length; k++){
     if(arrVowels.includes(word[k])){
       vowelScorePoints= vowelScorePoints + 3;
     }else{
       vowelScorePoints= vowelScorePoints + 1;
     }
   }return vowelScorePoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let word1;
function initialPrompt() {
  console.log("Let's play some scrabble!");
  word1 = input.question('\n'+"Enter a word to score:");

// Bonus Missions 
  /*while (!isValidWord(word1)) {
      let prompt = "Enter a word to score:";
      //console.log(prompt);
      word1 = input.question(prompt);
  }*/

};
// Bonus Missions  
let isValidAlgorithm = function(inputAlgorithm)
{
  if((inputAlgorithm === "0") || (inputAlgorithm === "1") || (inputAlgorithm === "2"))
  {
    return true;
  }
  else
  {
    return false;
  }
}

let isValidWord = function(inputWord)
{
  inputWord = inputWord.toUpperCase();
let letters =['A','B','C','D','E','F','G','H','I',
'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X',
'Y','Z'];
let boolValue;
for(i=0;i<inputWord.length;i++)
{
if(letters.includes(inputWord[i]))  {
  }  else  {
    boolValue="false";
  }
}

if(boolValue !="false"){
return true;
}else{
  return false;
}
}

let simpleScore= function(word1){
  return simpleScoreCalc(word1);
}
let vowelBonusScore= function(word1){
  return vowelBonusScoreCalc(word1);
}
let scrabbleScore= function(word1){
  return oldScrabbleScorer(word1);
}

const scoringAlgorithms = [
  {
  'name': 'Simple Score',
  'description': 'Each letter is worth 1 point.',
  'scoringFunction': simpleScore
  },
{
  'name': 'Bonus Vowels',
  'description': 'Vowels are 3 pts, consonants are 1 pt.',
  'scoringFunction': vowelBonusScore
},
{
  'name': 'Scrabble',
  'description': 'The traditional scoring algorithm.',
  'scoringFunction': scrabbleScore
}
];

function scorerPrompt() {
 let userAlgoNum = input.question("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2:");

//Bonus Missions 

   /* while (!isValidAlgorithm(userAlgoNum)) {
      let prompt = "Enter 0, 1, or 2:";
      //console.log(prompt);
      userAlgoNum = input.question(prompt);
   }*/

 if(userAlgoNum === "0")
 {
   return scoringAlgorithms[0].scoringFunction(word1);
 }
 else if(userAlgoNum === "1")
 {
   return scoringAlgorithms[1].scoringFunction(word1);
 }
 else
 {
   return scoringAlgorithms[2].scoringFunction(word1);
 }
}

function transform(oldPointStructure) {
  let newPointStructureValues = {};
  for (item in oldPointStructure) {
    let oldLength = oldPointStructure[item].length;
    for(n=0; n<oldLength;n++)
    {
      let lowerCaseLetters = oldPointStructure[item][n].toLowerCase();
      newPointStructureValues[lowerCaseLetters] = Number(item)
    }
  }
  //newPointStructureValues[' '] = 0;
  return newPointStructureValues;
};

function runProgram() {
   initialPrompt();
   console.log(`Score for '${word1}' : ` + scorerPrompt());
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

