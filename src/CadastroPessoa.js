class CadastroPessoa {
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    getNome() {
        return this.nome;
    }

    setNome(novoNome) {
        this.nome = novoNome;
    }

    getIdade() {
        return this.idade;
    }

    setNome(novaIdade) {
        this.idade = novaIdade;
    }

    getCPF() {
        return this.cpf;
    }

    setCPF(novoCPF) {
        this.cpf = novoCPF;
    }
}
export default CadastroPessoa;