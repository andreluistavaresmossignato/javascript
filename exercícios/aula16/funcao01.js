function parimpar(n){
    if(n%2 == 0){
        return 'Par!'
    }

    else{
        return 'Ímpar!'
    }
}

let res = parimpar(4) //4 é o parametro da função n acima
console.log(res)

console.log(parimpar(5)) //duas formas de colocar o resultado