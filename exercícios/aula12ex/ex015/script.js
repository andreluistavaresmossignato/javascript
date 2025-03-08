function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert("[ERRO] Verifique os dados e tente novamente!")
    }

    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''

        if(fsex[0].checked && idade >= 0 && idade <= 13){
            gênero = 'Menino'
        }

        else if(fsex[1].checked && idade > 0 && idade <= 13){
            gênero = 'Menina'
        }

        else if(fsex[0].checked && idade > 14 && idade <= 17){
            gênero = 'um Jovem'
        }

        else if(fsex[1].checked && idade > 14 && idade <= 17){
            gênero = 'uma Jovem'
        }
        
        else if(fsex[0].checked && idade >= 18 && idade <= 59){
            gênero = 'Homem'
        }

        else if(fsex[1].checked && idade >= 18 && idade <= 59){
            gênero = 'Mulher'
        }
    
        else if(fsex[0].checked && idade >= 60){
            gênero = 'Idoso'
        }

        else if(fsex[1].checked && idade >= 60){
            gênero = 'Idosa'
        }


        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}