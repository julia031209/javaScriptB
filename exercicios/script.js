//1- somar
function somar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("resultado").innerText = "resultado: " + (n1 + n2);
}

//2- verificar idade
function verificarIdade(){
    let idade = Number(document.getElementById("idade").value);
    if(idade >= 18){
        document.getElementById("resultado2").innerText = "maior de idade";
    }
    else{
        document.getElementById("resultado2").innerText = "voce é menor de idade";
    }
}

//3- contarCaracteres   
function contarCaracteres(){
    let texto = document.getElementById("palavra").value;
    document.getElementById("resultado3").innerText = "o tamanho do texto é: " + texto.length;
}

//4- verificar se é par ou impar
function verificarImparPar(){
    let num = Number(document.getElementById("numero").value);
    if(num % 2 === 0){
        document.getElementById("resultado4").innerText = "par";
    }
    else{
        document.getElementById("resultado4").innerText = "impar";
    }
}

//5- Nome em Caixa Alta
function nomeCaixaAlta(){
    let palavra
}