/*pessoas entre 16 há 17 anos e com mais de 65 anos de idade o voto é opcional
pessoas com mais de 18 anos */

var idade = 50
console.log(`Você tem ${idade} anos`)

if (idade < 16) {
    console.log('Não vota')
} else if (idade <= 17 || idade >= 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatorio')
}