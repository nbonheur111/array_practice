//Party Array(Objects Homework)

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


// Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp
const substractFromTimothy = () => {
    party.forEach(element => {
        if(element.name.toLocaleLowerCase() =="timothy") {
             element.hitpoints -=5;

        }
        
    });

}
substractFromTimothy();


//Prompt 3: Sarah's tiger has been turned into a jellyfish by a wizard, please change it
const changeSarahComp = () =>{
    party.forEach(element => {
        if(element.name.toLocaleLowerCase() == "sarah"){
            element.companion.name = "jellyfish"
        }
        
    });

}
changeSarahComp();


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


//Prompt 6: Joline got upset and left the party. Take her out of the array.
const removeJoline = () => {
    party.forEach(element => {
        if(element.name.toLocaleLowerCase()==  "joline"){
            party.splice(0,1);
        }
        
    });

}
removeJoline();


//Prompt 7: Timothy and Sarah have been recruiting. Add a new adventurer to the party.

const newAdventurer = (names) => {
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




//Prompt8: the party has been doing well. split gold evenly between everyone.

const newProperty = (gold) => {
    
    party.forEach(person => {
        person.gold = Math.round(gold/3);
    });
}
newProperty(210);


//Prompt 9: substract some of sarah's gold and replace her jellyfish

party.forEach(person => {
    if (person.name == "sarah"){
        person.companion = "bear";
    }
    
});



//Prompt 10: Timothy's sword has gotten old. Changing its name to "Rusty Sword"

party.forEach(person => {
    if(person.name.toLocaleLowerCase()== "timothy"){
        person.belongings[0] = "Rusty Sword";
    }

})


//Prompt 11: choosing a leader of the group

const setLeader = (name) => {
    party.forEach(person => {
        if(person.name.toLocaleLowerCase()== name.toLocaleLowerCase()){
            person.leader = true;
        }else{
            person.leader = false;
        }
        
    });
}
setLeader("SarAh");
console.log()

