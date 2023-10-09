let a = "robotron-branco.png";
let b = "robotron-amarelo.png";
let c = "robotron-vermelho.png";
let d = "robotron-rosa.png";
let e = "robotron-azul.png";
let f = "robotron-preto.png";


function mudar(){
    document.getElementById('imagem').src = a;
    let cor = a;
    a = b;
    b= c;
    c = d;
    d = e;
    e = f;
    f = cor;
}

function voltar(){
    document.getElementById('imagem').src = e;
    let inicio = mudar();
}