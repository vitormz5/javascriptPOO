import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Vitor", 11122233309);
const cliente2 = new Cliente("Ana", 88822233309);

const contaCorrenteVitor = new ContaCorrente(cliente1, 1001);
contaCorrenteVitor.depositar(500);
const contaCorrenteAna = new ContaCorrente(cliente2, 102);

let valor = 200;
contaCorrenteVitor.transferir(valor, contaCorrenteAna);

console.log(ContaCorrente.numeroDeContas);
