class Calculator {
    
    constructor(){
        this.display = document.querySelector(".display"); 
        const meuElemento = document.addEventListener('click', this.meuEventoDeClique);
    }

    teste() {
        this.display.value += "5";
        console.log("5")
        console.log(this.click);
    }

    meuEventoDeClique(e) {
        
        console.log(e.target.value);
    }
}

const calc = new Calculator();
calc.teste();
calc.meuEventoDeClique();