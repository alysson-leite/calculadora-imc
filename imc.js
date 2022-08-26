const btn = document.getElementById('btn')

function imc (){
    const nome = document.getElementById('nome');
    const altura = document.getElementById('altura');
    const peso = document.getElementById('peso');
    const resultado = document.getElementById('resultado');
    const campos = document.querySelectorAll('.campo')
    

    if (nome.value !== '' && altura.value !== '' && peso.value !== ''){
        const valorImc = (peso.value / (altura.value * altura.value)).toFixed(1);
        
        let classificacao = ''

        if(valorImc < 18){
            classificacao = 'abaixo do peso.';
        }else if(valorImc < 25){
            classificacao = 'com peso ideal. Parabéns!';
        }else if(valorImc < 30){
            classificacao = 'com sobrepeso. Procure um Nutricionista e pratique atividade física.'
        }else if(valorImc < 35){
            classificacao = 'com obesidade grau I. Cuidado, risco moderado de adquirir doenças crônicas e cardiovasculares'
        }else if(valorImc < 40){
            classificacao = 'com obesidade grau 2. Risco grave de adquirir doenças crônicas e cardiovasculares!'
        }else{
            classificacao = 'com obesidade grau 3. Você está em uma condição muito grave. Procure ajuda médica!'
        }

        resultado.textContent = `${nome.value} seu IMC é ${valorImc} e você está ${classificacao}`
        console.log(nome)
        console.log(valorImc)
    }else{
        resultado.textContent = 'Preencha todos os campos!!'
    }


    campos.forEach(function(campoVazio){
        if(campoVazio.value === ''){
            campoVazio.classList.add('campo-vazio');
        }
    })
    
}

btn.addEventListener('click', imc)