// Faça uma função que mergeie dois objetos, retornando um tipo que é a interssecção dos dois tipos dos objetos.
// Dica - utilize type-parameters para receber os tipos dos objetos dinâmicamente e spread ou Object.assign para a fazer o merge
// na implementação da função.

function mergeObjects<T, U>(object1:T, object2:U): T & U{
    return {...object1,...object2};
}

interface Person{
    name: string;
    age: number;
}

interface Address{
    street:string;
    city:string;
}

const person: Person = {name:'Marcus',age:24};
const address: Address = {street:'Rua X', city:'Atibaia'};

const personWithAddress = mergeObjects(person,address);
console.log(personWithAddress);
