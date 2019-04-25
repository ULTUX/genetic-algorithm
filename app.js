/*  1. Wybranie n losowych ciągów znaków o długosci k (funkcja )
    2. Obliczenie fitness każdego ciągu (funkcja calcfitness)
    3. Wybranie 2 ciągów z prawdopodobieństwem proporcjonalnym do fitness (funkcja wybierz)
    4. Połaczenie 2 połówek z każdego ciągu razem (funkcja łącz)
    5. Zmutowanie losowych liter ciągu z szansą z (funkcja mutuj)
    6. Dodaj do nowej populacji pupulacji
*/
let gen = 0;

let gene = document.getElementById("generation");

let textDom = document.getElementById("text");

let mutrate = document.getElementById("mutrate");

let generations = document.getElementById("generations");

let older = [];

function printGenerations(array) {
    let string = "";
    for (let i = array.length-1; i >= 0; i--){
        string += array[i]+"<br>";
    }
    if (array.length > 50) array.shift();
    generations.innerHTML = string;
    generations.style.height = window.innerHeight+"px";

}


let text = "To be or not to be";
let population = new Population(text, 5000, 0.01);
setup();

function setup(){
    mutrate.innerHTML = population.mutationRate*100+"%";
    population.initPopulation();
    loop();

}
function loop(){
    let inter = setInterval(()=>{
        gen++;
        gene.innerHTML = gen;
        let string = population.getMax();
        older.push(string);
        textDom.innerHTML = string;
        population.newGeneration();
        if (string == text) clearInterval(inter);
        printGenerations(older);

    }, 5)
}
