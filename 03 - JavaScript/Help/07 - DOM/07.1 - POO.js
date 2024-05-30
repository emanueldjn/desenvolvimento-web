// Encapsulamento com # (Campos Privados)

class ContaBancaria {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log('Saldo insificiente!')
        }
    }

    verSaldo() {
        console.log(`Saldo: R$ ${this.#saldo}`)
    }
}

let conta = new ContaBancaria(1000);
conta.depositar(500);
conta.sacar(200);
conta.verSaldo(); // Saída: "Saldo: R$ 1300"

