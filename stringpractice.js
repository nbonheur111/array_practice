const feast = (beast, dish) => {
    let animalName = beast.toUpperCase();
    let dishName = dish.toUpperCase();

    if (animalName.charAt(0) == dishName.charAt(0)) {
        if(animalName.charAt(animalName.length-1)== dishName.charAt( dishName.length-1)){
            return true;
        }
      
    } else {
      return false;
    }
  } 
  console.log(feast("cat", "fat"));

    // calculate the average of an array in JavaScript:
function getAverage(marks){
  
    // 1. Sum all the values of the array.
    // 2. Divide the sum by the length of the array.
  return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
}
console.log(getAverage([2,4,6,8,10]));

//convert a string to an array
const string = 'word';
string.split('');
[...string];
Array.from(string);
Object.assign([], string);

  //It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

const studenAverage = (array) => {
    let sum = 0;
    if(array.length > 0){
        array.forEach(element => {
            sum+=element; 
        });
        return Math.round(sum /array.length);
    }
    
}
console.log(studenAverage([1,2,3,4,5,6,7,8,9]));

    // feast = (beast, dish) => beast[0] == dish[0] && beast[beast.length -1] == dish[dish.length -1]
//for, for each, map used to iterate. for each does not return anything.

let party = [
    {
        name: 'Joline',
        hitpoints: 15,
        belongings: ["spear", "bread", "Tums"],
        companion: {
            name: "Tabby",
            type: "cat",
        }
    },
    {
        name: 'Timothy',
        hitpoints: 10,
        belongings: ["sword", "potion", "Tums"],
        companion: {
            name: "Velma",
            type: "Bat",
        }
    },
    {
        name: 'Sarah',
        hitpoints: 20,
        belongings: ["bow", "arrows", "wood"],
        companion: {
            name: "Tony",
            type: "tiger",
        }
    },
]


//Prompt 1: double the hitpoints of everyone in the party

const doubleHitPoints = () => {
    party.forEach(element => {
         element.hitpoints *=2;
        
    });

}
doubleHitPoints();
console.log(party)

// Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp
const substractFromTimothy = () => {
    party.forEach(element => {
        if(element.name.toLocaleLowerCase() =="timothy") {
             element.hitpoints -=5;

        }
        
    });

}
substractFromTimothy();
console.log(party);

//Prompt 3: Sarah's tiger has been turned into a jellyfish by a wizard, please change it
const changeSarahComp = () =>{
    party.forEach(element => {
        if(element.name.toLocaleLowerCase() == "sarah"){
            element.companion.name = "jellyfish"
        }
        
    });

}
changeSarahComp();
console.log(party);

//Prompt 4: Timothy drank this potion. Raise his hitpoints by 20 and remove "potion" from his belongings.

const raiseTimPotion = () => {

    party.forEach(element => {
        if(element.name.toLocaleLowerCase()== "timothy"){
             element.hitpoints += 20;
            element.belongings.splice(1,1);
        }
        
    });

}
raiseTimPotion();
console.log(party);

//Prompt 5: Timothy got hungry and stole Joline's bread. Take it out of her belongings and put it  into Timothy's belongings.
const timStealsBread = () => {
    party.forEach(element => {
        if(element.name.toLocaleLowerCase()== "timothy"){
            element.belongings.push("bread");
            
        }
        if(element.name.toLocaleLowerCase()== "joline"){
            element.belongings.splice(1,1);
        }
        
    });

}
timStealsBread();
console.log(party);

//Prompt 6: Joline got upset and left the party. Take her out of the array.
const removeJoline = () => {
    party.forEach(element => {
        if(element.name.toLocaleLowerCase()==  "joline"){
            party.splice(0,1);
        }
        
    });

}
removeJoline();
console.log(party);

//7 Timothy and Sarah have been recruiting. Add a new adventurer to the party.

let newAdventurer = (names) => {
    let newAdv = {
        name: undefined,
        hitpoints: 30,
        belongings: ["knife", "potion", "water"],
        companion: {
            name: "paul",
            type: "lizard",
        }
    }
      newAdv.name = names;

    party.push(newAdv);
}
newAdventurer("liz");

console.log(party);