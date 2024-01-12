let btns = [...document.querySelectorAll(".btn")]
let operador = [...document.querySelectorAll(".btnoperador")]
const numerosSelecionados = []
const apagar = document.querySelector(".btnapagar")
const limpar = document.querySelector(".btnlimpar")
const res = document.querySelector(".digitos")
const resultados = document.querySelector('.resultado_digitos')
const btnres = document.querySelector(".btnres")
var lista1 = []
const listaDividida = []
const numeros = []
const numeros2 = []
const operadores = []
var arraycalculo = []
lista1copia = []

//limpar
limpar.addEventListener('click', ()=>{
    console.log('err')
    lista1 = []
    exibir('', '')
})
//apagar
apagar.addEventListener("click", ()=>{
    //console.log(resultado)
    lista1.pop()
    lista1copia.pop()
    lista1copia = [...lista1]
    let digitos = lista1copia.join('')
    exibir(digitos, result)

    const array = converterParaNumeros(lista1)
    console.log(array)
    if(array.length<2){
        console.log('menor')
        exibir(digitos, '')}
    testar(lista1)

})

//mapear valores
btns.map((ele)=>{
    ele.addEventListener("click", (e)=>{
        numero(e.target.id)
    })
})

//armazenar e converter numero
const numero = (numero)=>{   
    const numeroParse = parseInt(numero)
    tratamento(numeroParse)
    //console.log(numeroParse)
    //verificarDigito(numeroParse)

}

const exibir = (valorExibido, resultado)=>{
    res.innerHTML = valorExibido
    if  (resultado != undefined){
        if(isNaN(resultado)){

        }else{
            resultados.innerHTML =  resultado  
        }
    }

}

//exibir(1)
//pegar operador
operador.map((ele)=>{
    ele.addEventListener("click", (e)=>{
        const stringOperador = (e.target.id)
        //console.log(stringOperador)
        tratarOperador(stringOperador)
    })})

const tratarOperador = (operador)=>{
    tratamento(operador)
    //verificarDigito(operador)
}

//atribuir um digito como numero ou operador

const tratamento = (valor)=>{
    //console.log(lista1)
    //console.log(valor)
    let last = lista1
    //se for verdadeiro é do tipo number, se for falso é um operador
    //if(typeof lista1[0] == 'number')
    if (verificarDigito(valor)){
        lista1.push(valor)
        //console.log(lista1)
    } 
    //se for operador
    else if (!(verificarDigito(valor))){
        let last = lista1.length-1
            //console.log(lista1[last])
            //console.log(lista1[0])
            //se o último valor for um número é só dar push
        if(lista1[0] == undefined && valor == '-'){
            lista1.push(valor)
        }else if(lista1[0] == undefined && valor == '.'){
            //console.log('é ponto')
            lista1.push(0)
            lista1.push('.')
        }else if(lista1[last] == '-'){
            lista1.push(0)
            lista1.push('.')
        }
        else if(lista1[0] == '-' && (lista1[1] == undefined) && valor == '+'){
            lista1.pop()
        }
        else if (verificarDigito(lista1[last])){
            lista1.push(valor)
            //se for x, também posso dar um push
        } else if ((lista1[last] == '+') || lista1[last] == '-' && verificarDigito(lista1[last-1])) {
            lista1.pop()
            lista1.push(valor)
        } else if ((lista1[last] == 'x') && valor == '-') {
            lista1.push(valor)
        } else if ((lista1[last] == ':') && valor == '-') {
            lista1.push(valor)
        } else if ((lista1[last] == 'x') && valor == ':'){
            lista1.pop()
            lista1.push(valor)
        } else if ((lista1[last] == ':') && valor == 'x'){
            lista1.pop()
            lista1.push(valor)
        } else if ((lista1[last] == 'x') && valor == '+'){
            lista1.pop()
            lista1.push(valor)
        } else if ((lista1[last] == '-') && (lista1[last-1] == 'x') && (valor == '+')){
            lista1.pop()
        } else if ((lista1[last] == '-') && (lista1[last-1] == 'x') && (valor == ':')){
            lista1.pop()
        } else if ((lista1[last] == '-') && (lista1[last-1] == ':') && (valor == '+')){
            lista1.pop()
        } else if ((lista1[last] == '-') && (lista1[last-1] == ':') && (valor == 'x')){
            lista1.pop()
        } //else if ((lista1[last] == '%') &&)
    }
//apagarconsole.log(lista1)
    const l = lista1.join("")
    lista1copia = [...lista1]

    var resultado
    
if(resultado!=undefined){
    //console.log('unde')
}    
console.log(lista1)
exibir(l)
//console.log(lista1copia)
    resultado = testar(lista1copia)
    console.log(resultado)
    console.log(lista1)
//
return lista1copia
    }
var result
    function testar(l) {

        //console.log(l)
        const array = converterParaNumeros(l)
        //console.log(array)
        if(array.length==2){
            result = calcular(array)
            let digitos = l.join('')
            exibir(digitos, result)
            console.log(result)
        } else if ((array.length>2) && (array[2] !='-')) {
            result = loopCalculos(array)
            let digitos = l.join('')
            exibir(digitos, result)
            console.log(result)
        }
    }

const separador = (array) => {
    let separado = []
    let concat = ''
    array.map((e, i)=>{
        
        if (typeof e == 'number'){
            concat = concat+e
            //console.log(concat)
            if(typeof array[i+1] == 'string' || array[i+1] == undefined){
                separado.push(concat)
                concat = ''
            }
        }
        else if((typeof e == 'string' && i>0) && !(array[i+1] == undefined)){
            separado.push(e)

        }
        else if (typeof e == 'string' && i==0){
            separado.push(e)
        }
    })
    //console.log(separado)
    return(separado)
}

btnres.addEventListener("click", ()=>{
    //console.log(result)
        const string = result.toString()
        const resultadoSeparado = string.split('')
        //console.log(resultadoSeparado)
        lista1 = []
        resultadoSeparado.map((e)=>{
        if (e == '-'){
            lista1.push(e)
        }else if(e=='.'){
            lista1.push(e)
        } else {const convNumero = parseInt(e)
            lista1.push(convNumero)
        }
        })
        exibir(result, '')
})

const converterParaNumeros = (array) => {
    let separado = []
    let concat = ''
    array.map((e, i)=>{
        
        if (typeof e == 'number'){
            concat = concat+e
            //console.log(concat)
            if((typeof array[i+1] == 'string' && array[i+1] !='.') || (array[i+1] == undefined) ){
                separado.push(concat)
                concat = ''
            }
        }else if(e == '.'){
            concat = concat+e
           // separado.push(concat)
            //console.log(separado)
        }
        else if((typeof e == 'string' && i>0) && !(array[i+1] == undefined)){
            separado.push(e)

        }
        else if (typeof e == 'string' && i==0){
            separado.push(e)
        }
    })
    //console.log(separado)
    let arrayConvertido = []

    if((separado[0] != '-') && (separado[0] != '-')){
        //console.log(separado[0])
        arrayConvertido.push(parseFloat(separado[0]))
    }
    for(let c=0; c<= separado.length;c++){
        
        if(separado[c] == '-'){
            if((separado[c-1] == 'x') || (separado[c-1] == ':')){
                //console.log(separado[c])

            } else {
                let concat = separado[c]+separado[c+1]
                let numero = parseFloat(concat)
                //console.log(concat)
                arrayConvertido.push(numero)
            }

        }else if(separado[c] == 'x' || separado[c] == ':'){
            arrayConvertido.push(separado[c])
            //console.log(separado[c])
            //se for +
            if((separado[c+1] == '-')){
                let concat = separado[c+1]+separado[c+2]
                let numero = parseFloat(concat)
                arrayConvertido.push(numero)
            }else{
                let concat = separado[c+1]
                let numero = parseFloat(concat)
                arrayConvertido.push(numero)
            }
        }else if (separado[c] == '+'){
            let numero = parseFloat(separado[c+1])
            arrayConvertido.push(numero)
        }
    }
    //console.log(arrayConvertido)
    return arrayConvertido
}
//converterParaNumeros([5, '.', 1])
//loopCalculos([-6.3, 'x', -3, 'x', 2, ':', 5])
//loopCalculos([6, 'x', 5, 5, -15, ':', -3])
function loopCalculos (array) {
    let c=0
do{
    //console.log(array)
    if(array[c] == 'x' || array[c] == ':'){
        //console.log(array[c])
        let op = array[c]
        let num1 = array[c-1]
        let num2 = array[c+1]

        let arrayDosValores = [num1, op, num2]
        //console.log(arrayDosValores)

        const resultadoNumber = calcular(arrayDosValores)
        //console.log(resultadoNumber)
        array.splice(c-1, 3, ...[resultadoNumber])
        c=0
    }
    c=c+1
    //console.log(c)
} while (array.includes('x') || array.includes(':'))

    //console.log(array)
    c = 0
    if (array.length > 1){
        do {
            let num1 = array[c]
            let num2 = array[c+1]
    
            let arrayDosValores = [num1, num2]
            //console.log(arrayDosValores)
            const resultadoNumber = calcular(arrayDosValores)
            //console.log(resultadoNumber)
            array.splice(c, 2, ...[resultadoNumber])
    
        } while (array.length > 1);
    }

    let numeroFloat = array[0]
return numeroFloat
}

function calcular (array) {
    //console.log(array)
    let op
    let num1
    let num2
    if( array.length>2){
        num1 = array[0]
        op = array[1]
        num2 = array[2]
        //console.log('mult')
    }else{
        //console.log('soma')
        num1 = array[0]
        num2 = array[1]
        if((num1>=0) && (num1>=0)){
            op = '+'
        } else if ((num1<=0) && (num1<=0)){
            op = '+'
        } else if ((num1<=0) && (num1>=0)){
            op = ''
        } else if ((num1>=0) && (num1<=0)){
            op= '-'
        }
    }

    let resultado
    if(op != undefined){
        switch (op) {
            case "x":
                return resultado = num1 * num2
            case ":":
                return resultado = num1 / num2
            case "+":
                return resultado = num1 + num2
            case "-":
                return resultado = num1 - num2
            case "%":
                return resultado = (num1 * num2) / 100
        }
    }

}

const verificarDigito = (valor)=>{
let d
    if ((typeof valor) == "number"){
        d = true
    } else if ((typeof valor) == "+" || "-" || ":" || "x" || "%" || "√") {
        d = false
        }
        return d
}

// let arre = []
// let ss = calcular('-', 65, '+', 3)
// //var string = ss.toString()
// var string = '+34'
// let ggg = string.split('')
//console.log(parseInt('2')) 
//arre.push(ss)
//const arre2 = [...arre]
//console.log([...    arre2])
//console.log(separador(arre2))

