const btn = document.querySelector('#submitbtn')
const resposta = document.querySelector('#resposta')
const recarregarButton = document.querySelector('#recarregar')

/* puxando dados do das sessões */
rabaixo = window.document.getElementsByClassName('resultadodiv')[0]
rmedia = window.document.getElementsByClassName('resultadodiv')[1]
racima = window.document.getElementsByClassName('resultadodiv')[2]
robesi = window.document.getElementsByClassName('resultadodiv')[3]


btn.addEventListener("click", function(event) {
    event.preventDefault()

    
    /* puxando dados do forms */
    const name = document.querySelector('#name').value
    const peso = document.querySelector('#peso').value
    const altura = document.querySelector('#altura').value


    if(name != ""){
        if(peso >= 1){
            if(altura >= 1){
                calcularfuncao()
            }else{
                window.alert('Preencha o campo Altura.')
            }
        }else{
            window.alert('Preencha o campo Peso.')
        }
    }else{
        window.alert('Preencha o campo Nome.')
    }
})


function calcularfuncao(){

    /* puxando dados do forms */
    const name = document.querySelector('#name').value
    const peso = document.querySelector('#peso').value
    const altura = document.querySelector('#altura').value

    /* Conta IMC */
    var r = peso / (altura * altura);

    /* Conta para atribuir o resultado */
    var rescrita = r >= 15 && r < 18.5 ? 'abaixo' : r > 18.5 && r <= 24.9 ? 'ideal' : r >= 25 && r <= 30 ? 'acima' : r > 30 ? 'obesidade' : 'erro'

    switch(rescrita){
        case 'abaixo':
            var rescrita = 'Você está abaixo do seu peso ideal.'
            respostaCerta();
            break
        case 'ideal':
            var rescrita = 'Você está no seu peso ideal.'
            respostaCerta();
            break
        case 'acima':
            var rescrita = 'Você está acima do seu peso ideal.'
            respostaCerta();
            break
        case 'obesidade':
            var rescrita = 'Você está em obesidade'
            respostaCerta();
            break
        case 'erro':
            resposta.innerHTML = 'Algo deu errado com as informações que você proveu...'
            break
        default:
            console.log('algo deu errado')
            break
    }

    function respostaCerta(){
        resposta.innerHTML = `Seu nome é ${name}, seu peso é ${peso} e sua altura é ${altura} e seu IMC é ${r.toFixed(2)} <br><br> ${rescrita}`

    }


    retirarForms();

    recarregarButton.style.display = 'block'

   
}

function retirarForms(){
       /* retirar forms */
       var formElement = document.getElementById('myform');
       var textHead = document.getElementById('h1')
       if (formElement) {
           formElement.parentNode.removeChild(formElement);
           textHead.style.display = 'none'
       }
}

recarregarButton.addEventListener("click", recarregarPagina)

function recarregarPagina(){
    window.location.reload();

}   




/* teste erroneo da minha parte...
var imca = r >= 16 && r <= 18.5 ? 'abaixo' : 'falso'
var imci = r > 18.5 && r <= 24.9 ? 'ideal' : 'falso'
var imcac = r >= 25 && r <= 30 ? 'acima' : 'falso'
var imco = r >= 30 ? 'obesi' : 'falso' */