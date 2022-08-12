const playerCharObj = {
  
    health: 100,
    status: "healthy",
    possibleStatuses: ["poisoned", "healthy", "dead"],
    items: ["sandwich"],


}

const gameMap = {

    0: { roomDescription:[
        "Light is streaming in from a hole in the cave ceiling above you.",
        "You can see cave pathways to the east and the west.",
        "There are various rocks and things scattered around the cave FLOOR."],

        roomNotables:{
            roomItems:{},
            roomSecrets:{},},

        roomExits:{
            north: null,
            south: null,
            east: 1,
            west: 2,
        }
    }
    ,
    1: {},
    2: {},
    3: {},
    4: {},
}

const gameState = {
    currentRoomID: 0,
    currentRoomObject: gameMap[0],
    previousCommand: null,
    currentCommand: null,
    commandArray: [],
    currentDescription: null,


    monsterEncountered: false,
    time: 0,
    adventureLogArray: [
        "You open your eyes.",
        "You are in a dim cave lying on the ground.",
        "Your head aches with a dull pain",
        "Light is streaming in from a hole in the cave ceiling above you."
         ]


};



const commandObject = {

   

    help:{ 
        "text": ["Help function works", "Help function works","Help function works" ]
        },

    

    inspect: {
        "text": ["Inspect function works", "Inspect function works", "Inspect function works"],
        north: {
            entrance:{},
        }
    },

    move: {
        "text": ["Move function works", "Move function works", "Move function works",],

        north: {},
        south: {},
        east: {},
        west: {}
    },

    take:{
        "text": ["take function works", "take function works", "take function works"],

    },


    use:{
        "text": ["use function works", "use function works", "use function works",],
        rock:{},
        torch:{},
    },
   

}



function runValidCommand(command, object){

    //we want to look at the commandArrayArray
    //Look at the first string in the array
    //See if that command is in our commandObject
    
    if(object[command] === undefined || commandObject[command] === null){
        // print to the info text: "That is not a valid command"

        return ["This is not a valid command"];
    }
    else if(object[command]){
        return object[command]["text"];
    }



};

function evaluateCommandArray(){

}

// This function gets the command the user wrote in our input
function parseUserCommand(){

    //We set our previousCommand property to be the command that is currently our currentCommand
    gameState.previousCommand = gameState.currentCommand

    // we update our currentCommand property to the command that the user just submitted from the input
    // we are using a querry selector to get this data from the DOM
    gameState.currentCommand = document.getElementById("user-input").value;
    
    // console log the value for debugging purposes
   console.log( gameState.currentCommand);

    // reset the input to empty
   document.getElementById("user-input").value = "";

//
    gameState.commandArray = gameState.currentCommand.toLowerCase().split(" ")
    
    console.log("commandArray is currently: ", gameState.commandArray);

}

function printTextToInfoTextSection(textArray){
    // Loop through the textArray we are given
    //We will print each line of text, which has been saved as an element in an array
    let infoText = document.getElementById("info-text");

    let currentCommand = document.createElement("p");
    let currentCommandText = document.createTextNode( "You wrote: " + gameState.currentCommand)
    currentCommand.appendChild(currentCommandText);
    infoText.appendChild(currentCommand);
    
        for(let i = 0; i < textArray.length; i++){

            let newLineOfText = document.createElement("p");
            let x = document.createTextNode(textArray[i]);
            newLineOfText.appendChild(x);

            infoText.appendChild(newLineOfText);
    
        };

   let promptText = document.createTextNode("What do you want to do?") 
   let prompt = document.createElement("p")
        prompt.appendChild(promptText);
        infoText.appendChild(prompt);

    
}

function scrollToBottomOfElementByIDName(idOfElement){
    let element = document.getElementById(idOfElement);
    element.scrollTop = element.scrollHeight;

}

function parseAndExecuteUserInput(){

    parseUserCommand();

    printTextToInfoTextSection(runValidCommand(gameState.commandArray[0], commandObject))
    
    // runValidCommand()
    
    scrollToBottomOfElementByIDName("info-text");

}








