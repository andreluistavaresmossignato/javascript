function carregar(){

    var titulo = document.getElementById('titulo')
    var rdp = document.getElementById('rdpfrase')
    var msg = document.getElementById('msg')
    var frase = document.getElementById('frase')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 4
    
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora > 0 && hora <= 4){
        //BOA MADRUGADA
        img.src = 'fotomadrugada.jpg'
        document.body.style.background = '#11052c'
        frase.innerText = 'Boa Madrugada!'
    }

    else if(hora >= 5 && hora < 12){
        //BOM DIA
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
        titulo.style.color = '#000000'
        rdp.style.color = '#000000'
        frase.innerText = 'Bom Dia!'
    }

    else if(hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
        frase.innerText = 'Boa Tarde!'
    }

    else if(hora > 18 && hora < 24){
        //BOA NOITE
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#515154'
        frase.innerText = 'Boa Noite!'
    }

    else{
        alert("[ERRO] Hora Inválida!")
    }

}

