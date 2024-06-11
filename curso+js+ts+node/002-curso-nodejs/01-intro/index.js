// Importando a lib responsável por criar o servidor

import http from "node:http";

// inicializando a variável responsável por gerenciar o servidor
const server = http.createServer((req, res) => {
    const {url, method} = req;

    // Criando uma rota raiz com o método GET
    if(url === "/" && method === "GET") {
        return res.end(
            JSON.stringify(
                {
                    status: 200,
                    body: "Bem-vindo a Home",
                }
            )
        );
    }

    // Inserido um status 404 - Erro
    res.statusCode = 404;

    // Retornando um json com o status e o vody
    return res.end(
        JSON.stringify(
            {
                status: "404",
                body: "404 (NOT FOUND)",
            }
        )
    );
});

// Disponibilizando uma porta para a comunicação com servidor, e escrevendo uma mensagen que deu certo
server.listen(3000, () => {
    console.log("Deu bom!")
});