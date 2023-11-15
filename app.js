function exibirMensagemInicial ()
{
exibirTextoNaTela("h1", "Jogo do Amorzinho");
exibirTextoNaTela("p", "Digite um número entre 1 e 42");
}


exibirMensagemInicial ();
let listaDeNumerosSorteados = [];
let multiplicadorNumero = 42;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;


function exibirTextoNaTela (tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function gerarNumeroAleatorio ()
{
    let numeroEscolhido = parseInt(Math.random() * multiplicadorNumero + 1);
    let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;

    if (quantidadeDeNumerosSorteados == multiplicadorNumero)

    {
        listaDeNumerosSorteados = [ ];
    }


    if (listaDeNumerosSorteados.includes (numeroEscolhido))

    {
    return gerarNumeroAleatorio ();
    }

    else 

    {
    listaDeNumerosSorteados.push(numeroEscolhido);    
    return numeroEscolhido;
    }

}
function limparCampo ()
    
    {
    let chute  = document.querySelector("input");
    chute.value  = "";    
    }



function verificarChute ()
{
    let chute = document.querySelector("input").value;
    console.log(`o número é ${numeroSecreto}`);
    console.log(listaDeNumerosSorteados);
  
    if (chute == numeroSecreto)


    {
        exibirTextoNaTela ("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemFinal = `Você descobriu o Número Secreto em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela ("p", mensagemFinal);
        document.getElementById ("reiniciar").removeAttribute("disabled");

    }
    else
    {
        if (chute > numeroSecreto)
        {
            exibirTextoNaTela ("p", " O número secreto é menor ");

        }

        else
        {
            exibirTextoNaTela ("p", " O número secreto é maior");
        }
        tentativas ++;
        limparCampo ();
    }
    
    
}

function reiniciarJogo ()
{
    exibirMensagemInicial ();
    numeroSecreto = gerarNumeroAleatorio ();
    limparCampo ();
    tentativas = 1;
    document.getElementById ("reiniciar").setAttribute("disabled", true)
}














