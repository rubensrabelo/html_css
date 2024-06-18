import inquirer from "inquirer";
import chalk from "chalk";

import fs from "fs";

operacao();

function operacao(){
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message:"O que voce deseja fazer?",
            choices: [
                "Criar Conta",
                "Consultar Saldo",
                "Depositar",
                "Sacar",
                "Sair",
            ]
        },
    ]).then(answer => {
        const action = answer["action"];
        
        if(action === "Criar Conta") criarConta();
    })
    .catch((err) => console.log(err));
}

function criarConta(){
    console.log(chalk.bgGreen.black("Obrigado por escolher o nosso banco!"));
    console.log(chalk.green("Defina as opções da sua conta a seguir"));
}