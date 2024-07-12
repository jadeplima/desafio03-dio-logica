class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou sua espada';
                break;
            case 'ninja':
                ataque = 'usou suas shurikens';
                break;
            case 'monge':
                ataque = 'usou seus punhos';
                break;
            default:
                ataque = 'saiu correndo...';
        }
        console.log(`O ${this.tipo} ${this.nome} ${ataque}`);
    }
}

// Criando instâncias de Heroi com os dados fornecidos
const mago = new Heroi('Merlinthar', 130, 'mago');
const guerreiro = new Heroi('Thalgrimr', 25, 'guerreiro');
const ninja = new Heroi('Hanzo', 32, 'ninja');
const monge = new Heroi('Liang', 98, 'monge');
const cidadaoComum = new Heroi('Sebastiao', 64, 'cidadao');

console.log("Luta sendo travada contra inimigos poderosos... \n");

// Chamando o método atacar para cada herói
mago.atacar();
guerreiro.atacar();
ninja.atacar();
monge.atacar();
cidadaoComum.atacar();