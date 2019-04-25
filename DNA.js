class DNA {
    constructor (size, mut, string){
        this.size = size;
        this.mut = mut;
        this.dna = [];
        for (let i = 0; i < this.size; i++){
            this.dna[i] = string[i];
        }
    }

    chanceOf(){
        if (Math.random()<this.mut) return true;
        else return false;
    }




    randomChar(){
        let num = 61 + Math.floor(Math.random()*(123-61));
        if (num == 61) num = 32;
        if (num == 62) num = 46;
        return String.fromCharCode(num);
    }

    getDNA(){
        return this.dna;
    }
    

    getCharAt(index){
        return this.dna[index];
    }

    genDNA(){
        for (let i = 0; i < this.size; i++){
            this.dna[i] = this.randomChar();
        }
    }

    getDnaAsString(){
        let string = "";
        for (let k of this.dna){
            string+=k
        }
        return string;
    }


    mutateDNA(){
        for (let k = 0; k < this.dna.length; k++){
            if (this.chanceOf()){
                this.dna[k] = this.randomChar();
            }
        }
    }

}