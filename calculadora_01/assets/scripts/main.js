class Calculator {
    
    constructor(){
        this.display = document.querySelector(".display"); 
        document.addEventListener('click', (e) => this.exibirNoDisplay(e));
    }

    exibirNoDisplay(e) {
        const element = e.target.className;
        
        if(element.includes("btn")) {
            let valor = e.target.value;
            // console.log(value);

            switch(valor) {
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                case "+":
                case "-":
                case "*":
                case "/":
                case "%":
                case ".":
                    this.display.value += valor;
                    break;
                case "+/-":
                    this.display.value = "-" + this.display.value; 
                    break;
                case "clear-all":
                    this.display.value = "";
                    break;
                case "clear-last":
                    this.display.value = this.display.value.slice(0, -1);
                    break;
                default:
                    let num = this.display.value;
                    let resultado = this.resultado(valor, num);
                    this.display.value = resultado
                    break;
            }
        }
        // console.log(this.display.value);
    }

    resultado(valor, num) {
        if (valor === "pow") return Math.pow(num, 2);
        if (valor === "root") return Math.sqrt(num, 2);

        return eval(this.display.value);
    }
}

const calc = new Calculator();