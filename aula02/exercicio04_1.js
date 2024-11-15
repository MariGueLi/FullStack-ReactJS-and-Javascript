const aluno= {
    nome: "Mariana",
    cpf: "123.123.123-12",
    cidade: "João Pessoa",
    notas: [8.00, 6.00, 5.00, 10.00]
}

console.log(`Nome: ${aluno.nome}`)
console.log(`CPF: ${aluno.cpf}`)
console.log(`Cidade: ${aluno.cidade}`)

console.log(`A primeira nota do aluno é: ${aluno.notas[0]}`)
console.log(`A segunda nota do aluno é: ${aluno.notas[1]}`)
console.log(`A terceira nota do aluno é: ${aluno.notas[2]}`)
console.log(`A quarta nota do aluno é: ${aluno.notas[3]}`)

const media = (aluno.notas[0]+aluno.notas[1]+aluno.notas[2]
    +aluno.notas[3])/aluno.notas.length

console.log(`A média é: ${media.toFixed(1)}`)

const notaAleatoria = aluno.notas[Math.floor(Math.random() * aluno.notas.length)];

const notaConvertida = notaAleatoria * 10

console.log(`A nota sorteada foi: ${notaAleatoria} e convertida para
    a escala de 0-100 é: ${notaConvertida}`)