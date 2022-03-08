function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 6 && idade < 13) {
                //criança
                img.setAttribute('src', 'menino.png')
            } else if (idade >= 17 && idade < 25) {
                //Jovem
                img.setAttribute('src', 'homem jovem.png')
            } else if (idade > 25 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem.png')
            } else if (idade > 50) {
                //Idoso
                img.setAttribute('src', 'senhor 80.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 6 && idade < 13) {
                //criança
                img.setAttribute('src', 'menina.png')
            } else if (idade >= 17 && idade < 25) {
                //Jovem
                img.setAttribute('src', 'mulher jovem.png')
            } else if (idade > 25 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher.png')
            } else if (idade > 50) {
                //Idoso
                img.setAttribute('src', 'senhora 80.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero}, com ${idade} anos de idade`
        res.appendChild(img)
    }
}