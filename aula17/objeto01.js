let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.8,
    engordar(p) {
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(typeof amigo)