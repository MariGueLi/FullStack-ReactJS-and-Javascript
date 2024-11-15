const mediaParaAprovacao = 7.0

const notas = [7.50, 6.00, 7.10]
const media = ((notas[0]+notas[1]+notas[2])/notas.length).toFixed(1)

var  statusAprovacao;

if (media<mediaParaAprovacao){
    statusAprovacao = "Reprovado"
}
else{
    statusAprovacao = "Aprovado"
}
console.log (`Nota 1: ${notas[0]}`)
console.log (`Nota 2: ${notas[1]}`)
console.log (`Nota 3: ${notas[2]}`)
console.log (`Média: ${media}`)
console.log (`Status Aprovação: ${statusAprovacao}`)