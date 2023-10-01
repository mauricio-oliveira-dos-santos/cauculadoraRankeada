let vitorias = 45;
let derrotas = 22;
let saldo = vitorias - derrotas;

function resultado(vitorias, derrotas) {
    let resultado = vitorias - derrotas;
    console.log(resultado);
}

resultado(vitorias, derrotas);

if (saldo < 10) {
    console.log("O Herói tem saldo de " + saldo + " está no nível de ferro");
} else if (saldo >= 11 && saldo <= 20) {
    console.log("O Herói tem saldo de " + saldo + " está no nível de bronze");
} else if (saldo >= 21 && saldo <= 50) {
    console.log("O Herói tem saldo de " + saldo + " está no nível de prata");
} else if (saldo >= 51 && saldo <= 80) {
    console.log("O Herói tem saldo de " + saldo + " está no nível de ouro");
} else if (saldo >= 81 && saldo <= 90) {
    console.log("O Herói tem saldo de " + saldo + " está no nível de Diamante");
} else if (saldo >= 91 && saldo <= 100) {
    console.log("O Herói tem saldo de " + saldo + " está no nível de Lendario");
} else if (saldo > 100) {
    console.log("O Herói tem saldo de " + saldo + " está no nível de imortal");
} else {
    console.log("valor indefinido");
}
