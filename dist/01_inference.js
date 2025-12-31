//goal -> understand when to let Typescript infer types
//when ts will writes the types 
let count = 0; //ts sees number. you dont have to specify
const site = "academia"; //ts sees the exal literal "academia"
const score = [10, 20, 30];
//over annotation isnt bad -> just noisy
export function add(a, b) {
    return a + b;
}
//you should also annotate when the type is not obvious
let maybe;
maybe = Math.random() > 0.5 ? "hello" : 100; //no error as we annotated
