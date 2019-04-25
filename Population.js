class Population{
    constructor (target, popNum, mut) {
        this.target = target;
        this.populationNumber = popNum;
        this.size = target.length;
        this.mutationRate = mut;
        this.population = [];
        this.oldPopulation = [];
        this.fitness = [];
        this.first = null;
        this.second = null;
        this.sum = 0;
        this.pool = [];
    }


    initPopulation(){
        for (let i = 0; i < this.populationNumber; i++){
            this.population[i] = new DNA(this.size, this.mut, this.target);
            this.population[i].genDNA();
        }
        this.calcFitness();

            for (let i = 0; i < this.fitness.length; i++){
                this.sum += this.fitness[i];
            }
            this.getBest();
    }
    calcFitness(){
        for (let j = 0; j < this.population.length; j++){
            let k = this.population[j];
            let fitnessOfDna = 0;
            for (let i = 0; i < this.size; i++) if (k.getCharAt(i) == this.target[i]) fitnessOfDna++;
            this.fitness[j] = fitnessOfDna*fitnessOfDna;
        }

    }

    copyArray(){
        let array = [];
        for (let k = 0; k < this.population.length; k++){
            array[k] = this.population[k];
        }
        return array;
    }
    newGeneration(){
        this.oldPopulation = this.copyArray();
        for (let i = 0; i < this.population.length; i++){
            this.population[i] = new DNA(this.size, this.mutationRate, this.crossOver(
                this.oldPopulation[this.pool[Math.floor(Math.random()*(this.pool.length))]].getDnaAsString(),
                this.oldPopulation[this.pool[Math.floor(Math.random()*(this.pool.length))]].getDnaAsString()));
            this.population[i].mutateDNA();
        }
        this.calcFitness();
        this.pool = [];
        this.getBest();
    }
    

    getMax(){
        return this.population[this.maxFitness()].getDnaAsString();
    }
    crossOver(a, b){
        let result = "";
        for (let i = 0; i < this.target.length; i++){
            if (i < Math.ceil(this.target.length/2)){
                result +=a[i];
            }
            else result += b[i]
        }
        return result;
    }



    getBest(){
        for (let i = 0; i < this.population.length; i++){
            for (let j = 0; j < this.fitness[i]; j++){
                this.pool.push(i);
            }
        }
    }

    maxFitness(){
        let max = 0;
        for (let k = 0; k < this.fitness.length; k++){
            if (this.fitness[k] > this.fitness[max]) max = k;
        }
        return max;
    }


    printPopulation(){
        for (let k of this.population){
            console.log(k.getDnaAsString()+"\n");
        }
    }


}