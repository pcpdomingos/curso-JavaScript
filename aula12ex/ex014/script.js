function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
        //var hora = 23;

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.scr = 'morning.png'
        document.body.style.background = '#FCDB8C'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'afternoon.png'
        document.body.style.background = '#B5BFCB'
    } else {
        //BOA NOITE
        img.src = 'night.png'
        document.body.style.background = '#071C1F'
    }
}