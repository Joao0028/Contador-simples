function calcular(){

    var n1 = document.querySelector(".n1")
    var n1 = Number(n1.value)

    var n2 = document.querySelector(".n2")
    var n2 = Number(n2.value)  

    var n3 = document.querySelector(".n3")
    var n3 = Number(n3.value)

    var resultadoContainer = document.querySelector(".resultado")

    if(n1 == 0 && n3 == 0){
        var n1 = 0
        var n3 = 1
    }
    if(n2 == 0){
        alert("Digite um número final!")
    }
    resultadoContainer.innerHTML = ""
    while(n1 <= n2){
        resultadoContainer.style.display = "flex"
        var resultado = document.createElement("h1")
        resultado.innerHTML = `${n1}`
        resultadoContainer.appendChild(resultado)
        var n1 = (n1 + n3) - 1
        n1++
    }
}

