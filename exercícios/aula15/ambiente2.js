let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)// a contagem de elementos começa a partir do 0

let pos = num.indexOf(4) // Quando o valor não é encontrado, ele ganha valor de -1

if(pos == -1){
    console.log("O valor não foi encontrado!")
}

else{
    console.log(`O valor está na posição ${pos}`)
}
