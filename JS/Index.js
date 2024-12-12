
const lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(typeof lista);
const itens = ["Mateus",true, 2, 4.12, []];
console.log(itens);

const arr = ["a", "b", "c", "d", "d"];
console.log(arr[0]);

const numbers = [5, 3, 4];

console.log(numbers,length);
console.log(numbers["length"]);
const myname = "Mateus";

const othernumbers = [1, 2, 3]; 

const allnumbers = numbers.concat(othernumbers);

console.log(allnumbers);

const text="algun texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);
console.log(text.indexOf("g"));

const person = {
    name:"Mateus",
    age: 31, 
    job:"programador",
    };
    console.log (person)
    console.log (person.name);
    console.log (person.name.length);
    console.log(typeof person);

    const Caneta = {
        name: "Caneta",
        color: "preta",
        ponta: "2.5",
        tinta: "2 ml",
        type: "canetao quadro"
    };
    
    console.log(Caneta);
    
    Caneta.color = "preta"; 
    console.log(Caneta);
    
    delete Caneta.tinta;
    console.log(Caneta);

    const a ={
        name:"matheus",
    };
    const b = a;
    console.log(a);
    console.log(b);
    console.log(a===b);

    a.age =31;
    
    console.log(a);
    console.log(b);
    
    delete b.age;
    
    console.log(a);
    console.log(b);

    const users = ["mateus", "joão", "Pedro", "miguel"];
    for(let i = 0; i < users.length; i++){
        console.log(`listando o usuario: $(users[i])`);
    }

    const array = ["a", "b", "c"];

    array.push("d");

    console.log(array);

    console.log(array.length);

     array.pop("b");

    console.log(array);

