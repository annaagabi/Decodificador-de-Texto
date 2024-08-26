let inputTexto = document.querySelector("#texto-inserir")
let textoCopiar = document.querySelector("#texto-copiar")
let btnCripto = document.querySelector("#btn-cripto")
let btnDCripto = document.querySelector("#btn-dcripto")
let btnCopiar = document.querySelector("#btnCopiar")

btnCripto.addEventListener("click", function(){
    if(inputTexto.value !== ""){
        if(!inputTexto.value.match(/^[a-z ]+$/)){
            alert("Por favor digite apenas letras minúsculas sem acento")
        }else{
            document.getElementById("sem-retorno").style.display = "none";
            let palavraCripto = inputTexto.value
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat")
            document.getElementById("texto-criptografado").style.display = "flex";
            // document.getElementById("btn-copiar").style.display = "block";
            // document.getElementById("texto-copiar").style.display = "block";
            return textoCopiar.innerHTML = palavraCripto
        }
    } else{
        alert("Por favor digite um texto para criptografar")
    }
    
})

btnDCripto.addEventListener("click", function(){
    if(inputTexto.value !== ""){
        if(!inputTexto.value.match(/^[a-z ]+$/)){
            alert("Por favor digite apenas letras minúsculas e sem acento")
        }else{
            document.getElementById("sem-retorno").style.display = "none";
            let palavraDcripto = inputTexto.value
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u")
            document.getElementById("texto-criptografado").style.display = "flex";
            document.getElementById("texto-criptografado").style.justifyContent= "space-between";
            // document.getElementById("btn-copiar").style.display = "block";
            // document.getElementById("texto-copiar").style.display = "block";
            return textoCopiar.innerHTML = palavraDcripto
        }
    } else{
        alert("Por favor digite um texto para descriptografar")
    }
})

btnCopiar.addEventListener("click", function(){
    navigator.clipboard.writeText(textoCopiar.innerText)
    alert("Texto copiado com sucesso");
})