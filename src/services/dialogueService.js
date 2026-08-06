export function getRandomDialogue(dialogues){

    return dialogues[
        Math.floor(Math.random()*dialogues.length)
    ];

}