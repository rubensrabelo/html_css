// Importando o módulo responsável pela leitura de um arquivo
const fs = require("fs");

// Criando a função que irá ler o arquivo ou gerar algum erro
fs.readFile("arquivo.txt", "utf8", (err, data) => {
    if(err) console.log(err);

    console.log(data);
});