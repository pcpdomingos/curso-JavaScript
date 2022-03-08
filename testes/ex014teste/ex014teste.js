function detectar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} hrs`
    if (hora >= 0 && hora < 12) {
        img.src = 'morning.png'
        document.body.style.background = '#FDC662'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'afternoon.png'
        document.body.style.background = '#7F9BB3'
    } else {
        img.src = 'night.png'
        document.body.style.background = '#071B1C'
    }

}