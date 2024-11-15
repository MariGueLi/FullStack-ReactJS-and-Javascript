var temperaturasC=[25, 30, 15, 20]

console.log(`As temperaturas armazenadas são: ${temperaturasC}`)

const temperaturaAleatoria= temperaturasC[Math.floor(Math.random()*temperaturasC.length)]

const temperaturaF = (temperaturaAleatoria*9/5)+32

console.log(`A temperatura sorteada é ${temperaturaAleatoria} C, que corresponde a ${temperaturaF}F`)