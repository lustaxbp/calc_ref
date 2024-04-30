var teclado = require("prompt-sync")();
var n1 = 0;
var n2 = 0;
function sair() {
    console.clear();
    console.log("fim de programa...");
    teclado();
    process.exit(0);
}
function adicao() {
    n1 = parseInt(teclado("Digite o primeiro numero: "));
    n2 = parseInt(teclado("Digite o segundo numero: "));
    var resultado = n1 + n2;
    console.log("A adi\u00E7\u00E3o dos numeros ".concat(n1, " e ").concat(n2, " \u00E9 ..."));
    console.log("...".concat(resultado));
    teclado();
    menu();
}
function subtracao(n1, n2) {
    n1 = parseInt(teclado("Digite o primeiro numero: "));
    n2 = parseInt(teclado("Digite o segundo numero: "));
    var resultado = n1 - n2;
    console.log("A subtra\u00E7\u00E3o dos numeros ".concat(n1, " e ").concat(n2, " \u00E9 ..."));
    console.log("...".concat(resultado));
    teclado();
    menu();
}
function multiplicacao(n1, n2) {
    n1 = parseInt(teclado("Digite o primeiro numero: "));
    n2 = parseInt(teclado("Digite o segundo numero: "));
    var resultado = n1 * n2;
    console.log("A multiplica\u00E7\u00E3o dos numeros ".concat(n1, " e ").concat(n2, " \u00E9 ..."));
    console.log("...".concat(resultado));
    teclado();
    menu();
}
function divisao(n1, n2) {
    n1 = parseInt(teclado("Digite o primeiro numero: "));
    n2 = parseInt(teclado("Digite o segundo numero: "));
    var resultado = n1 / n2;
    console.log("A divis\u00E3o numeros ".concat(n1, " e ").concat(n2, " \u00E9 ..."));
    console.log("...".concat(resultado));
    teclado();
    menu();
}
function selecao(opcao) {
    switch (opcao) {
        case "s":
            sair();
            break;
        case "+":
            adicao();
            break;
        case "-":
            subtracao(n1, n2);
            break;
        case "/":
            divisao(n1, n2);
            break;
        case "*":
            multiplicacao(n1, n2);
            break;
    }
}
function menu() {
    console.clear();
    console.log("----- selecione op\u00E7\u00E3o -------");
    console.log("");
    console.log("digite a op\u00E7\u00E3o desejada");
    console.log(" + ---> adi\u00E7\u00E3o ");
    console.log("- ---> subtra\u00E7\u00E3o ");
    console.log(" * ---> multiplica\u00E7\u00E3o ");
    console.log(" / ---> divis\u00E3o ");
    console.log("s - sair ");
    var opcao = (teclado("digite a op\u00E7\u00E3o --->"));
    selecao(opcao);
}
menu();
