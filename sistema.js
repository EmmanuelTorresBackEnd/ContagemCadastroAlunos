let NumeroDeAlunos = 10;

for (let contador = 0; contador < NumeroDeAlunos; contador++) {
    console.log(contador)

    if (contador == 0) {
        console.log("O número atual é ZERO")
    } else if (contador % 2 == 0) {
        console.log("O número " + contador + " é PAR")
    } else {
        console.log(`O numero ${contador} é IMPAR`)
    }

}

let contador = 0;

let NomesDeAlunos = ["Gabriela" , "José" , "Emmanuel" , "Letícia"]

for (let nome of NomesDeAlunos) {
    console.log(`Essa pessoa se chama ${nome}`);

    NomesDeAlunos.forEach(nome => {
        console.log(`O nome é ${nome}`);
    });
}