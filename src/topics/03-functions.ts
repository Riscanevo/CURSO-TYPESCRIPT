function addNumber(a:number ,b:number) : number {
    return a + b;
    
}
function addNumbers (a:number,b:number) : string{
    return ` ${a + b}`;
} 
function multiplyNumbers (firstNumber:number ,secondNumber?:number ,base:number = 5   ) : number{
    return firstNumber * base;
}

// const result = addNumber(6 , 12);
// const result2 = addNumbers(10,10);
// const result3 = multiplyNumbers(5)
// console.log({result, result2, result3});

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}


const healCharacter = ( character: Character, amount:number ) => {

    character.hp += amount;
}

const strider = {
    name: 'strider',
    hp : 100,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
        
        
    }
}

healCharacter(strider, 20);
healCharacter(strider, 20);
healCharacter(strider, 20);
strider.showHp();



export{};