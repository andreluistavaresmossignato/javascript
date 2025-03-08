function gerar(){

    var num = document.getElementById('num')
    var tabuada = document.getElementById('tabu')

    if(num.value.length == 0){
        alert("Por favor, digite um número")
    }

    else{

        let n = Number(num.value)
        let valor = 1;
        let resultado = 0;
        tabuada.innerHTML = ''

        do{
            resultado = n * valor

            let item = document.createElement('option')
            item.text = `${n} X ${valor} = ${resultado}`
            item.value = `tabuada${valor}`

            tabuada.appendChild(item)

            valor++

        }while(valor <= 10)

    }

}