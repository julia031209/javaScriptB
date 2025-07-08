//1- somar
function somar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("resultado").innerText = "resultado: " + (n1 + n2);
}

function verificarIdade(){
    let idade = Number(document.getElementById("idade").value);
    if(idade >= 18){
        document.getElementById("resultado2").innerText = "maior de idade";
    }
    else{
        document.getElementById("resultado2").innerText = "voce é menor de idade";
    }
}

function contarCaracteres(){
    
}