const teclado = require (`prompt-sync`)();
let n1 : number = 0 ;
let n2 : number = 0 ;

function sair (): void{
    console.clear();
    console.log(`fim de programa...`);
    teclado()
    process.exit(0);
}

function adicao (): void{ 
    n1 = parseInt(teclado(`Digite o primeiro numero: `));
    n2 = parseInt(teclado(`Digite o segundo numero: `));
    let resultado : number = n1 + n2 ;
    console.log(`A adição dos numeros ${n1} e ${n2} é ...`)
    console.log (`...${resultado}`)
    teclado()
    menu()
}

function subtracao (n1 : number , n2 : number ): void{ 
    n1 = parseInt(teclado(`Digite o primeiro numero: `));
    n2 = parseInt(teclado(`Digite o segundo numero: `));
    let resultado : number = n1 - n2 ;
    console.log(`A subtração dos numeros ${n1} e ${n2} é ...`)
    console.log (`...${resultado}`)
    teclado ()
    menu()
}

function multiplicacao (n1 : number , n2 : number ): void{ 
    n1 = parseInt(teclado(`Digite o primeiro numero: `));
    n2 = parseInt(teclado(`Digite o segundo numero: `));
    let resultado : number = n1 * n2 ;
    console.log(`A multiplicação dos numeros ${n1} e ${n2} é ...`)
    console.log (`...${resultado}`)
    teclado ()
    menu()
}

function divisao (n1 : number , n2 : number ): void{ 
    n1 = parseInt(teclado(`Digite o primeiro numero: `));
    n2 = parseInt(teclado(`Digite o segundo numero: `));
    let resultado : number = n1 / n2 ;
    console.log(`A divisão numeros ${n1} e ${n2} é ...`)
    console.log (`...${resultado}`)
    teclado()
    menu()
}

 function selecao (opcao:string): void{
    
    switch (opcao){
        case `s` : sair();break;
        case `+` :adicao ();break
        case `-`:subtracao(n1,n2);break;
        case `/`:divisao(n1,n2);break;
        case `*`:multiplicacao(n1,n2);break;
        }
 }

function menu (): void{
    console.clear();
    console.log(`----- selecione opção -------`);
    console.log(``);
    console.log(`digite a opção desejada`);
    console.log(` + ---> adição `);
    console.log(`- ---> subtração `);
    console.log(` * ---> multiplicação `);
    console.log(` / ---> divisão `);
    console.log(`s - sair `)
    let opcao: string = (teclado(`digite a opção --->`));
    selecao(opcao);
}
menu();