const skills : string[] = ['HTML', 'CSS', 'JavaScript'];

interface character {
    name :string;
    hp : number;
    skills : string[];
}


const strider:character ={
    name : 'strider',
    hp : 100,
    skills : ['HTML','CSS']
}

console.table(strider);

export{};