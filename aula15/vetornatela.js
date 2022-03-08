let valores = [8, 1, 7, 4, 2, 9]


/*
for (let pos = 0; pos < valores.length; pos++) {
    /*iniciou a variavel pos, disse "enquanto pos for menor que o vetor"
       disse "faça mais um pos"
       
    console.log(`A posição ${pos} tem o valor ${valores[pos]/*o pós dentro faz com que mostre somente 
        o valor da posição e não todos}`)
}
*/

//como fazer de forma mais simples

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}