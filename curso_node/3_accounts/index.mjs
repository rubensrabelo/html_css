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
        
        if(action === "Criar Conta") {
            opcoesDaConta();
        } else if(action == "Depositar") {
            depositar();
        } else if (action == "Sair") {
            console.log(chalk.bgBlue.black("Obrigado por usar sua conta!"));
            process.exit();
        }
    })
    .catch((err) => console.log(err));
}

function opcoesDaConta(){
    console.log(chalk.bgGreen.black("Obrigado por escolher o nosso banco!"));
    console.log(chalk.green("Defina as opções da sua conta a seguir"));
    criarConta();
}

function criarConta() {
    inquirer.prompt({
        name: "accountName",
        message: "Digite o nome da sua conta: "
    }).then((answers) => {
        const accountName = answers["accountName"];

        console.info(accountName);

        if(!fs.existsSync("accounts")) fs.mkdirSync("accounts");

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black(`A conta ${accountName} já existe`));
            criarConta();
            return;
        }

        fs.writeFileSync(
            `accounts/${accountName}.json`, 
            '{"balance": 0}',
            function (err) {console.log(err);}
        );

        chalk.green("Parabéns, sua conta foi criada!")
        operacao();
    })
    .catch((err) => console.log(err));
}

function depositar() {
    inquirer.prompt({
        name: "accountName",
        name: "Qual o nome da sua conta? ",
    }).then((answer) => {
        const accountName = answer["accountName"];

        if(!checarAConta(accountName))
            return depositar();

        inquirer.prompt({
            name: "valor",
            message: "Qual o valor voce quer depositar? "
        }).then((answer) => {
            const valor = answer["valor"];

            inserirEmBalanco(accountName, valor);

            operacao();
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

function checarAConta(accountName) {
   if(!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black("Essa conta não existe, escolha outro nome!"))
        return false
    };
   
   return true;
}

function inserirEmBalanco(nomeDaConta, valor){
    const account = pegarConta()

    if(!valor) {
        console.log(chalk.bgRed.black(`Digite um valor!`));
        return depositar();
    }

    account.balance = parseFloat(valor) + parseFloat(account.balance);

    fs.writeFileSync(`accounts/${nomeDaConta}.json`,
        JSON.stringify(account),
        function (err) {console.log(err);},
    );

    console.log(chalk.green(`O valor ${valor} foi depositado!`));
}

function pegarConta() {
    const arquivoJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        enconding: "utf8",
        flag: "r"
    });

    return JSON.parse(arquivoJSON);
}