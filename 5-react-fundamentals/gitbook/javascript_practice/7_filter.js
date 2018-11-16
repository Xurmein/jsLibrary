const stuff = [
    {name: 'thing1', color: 'blue', detail: 'flabbanaba', index: 0},
    {name: 'thing2', color: 'red', detail: 'glarpnarp', index: 1},
    {name: 'thing3', color: 'yellow', detail: 'blemfork', index: 2},
    {name: 'thing4', color: 'green', detail: 'nomp-blomp', index: 3},
    {name: 'thing5', color: 'orange', detail: 'meoncontoff', index: 4},
    {name: 'thing6', color: 'purple', detail: 'guh-nork-nee', index: 5},
];

let stuff_details = [];

for (let i = 0; i < stuff.length; i++){
    if(stuff[i].index >= 2){
        stuff_details.push(stuff[i].detail);
    }
}
console.log(stuff_details);