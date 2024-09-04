const TemplateExpression = () => {
    const worker = {
        name: "João",
        profission: "Program",
        age: 35
    }

    return (
        <div>
            <h1>Nome: {worker.name}</h1>
            <h1>Profissão: {worker.profission}</h1>
            <h1>Idade: {worker.age}</h1>
        </div>
    )
}

export default TemplateExpression;