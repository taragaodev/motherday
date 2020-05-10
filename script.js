const btn = document.getElementById('btnSend');  
const mae = document.getElementById('mae');    
const msg = document.getElementById('texto');    
const nome = document.getElementById('nome');  

function mostrar(){          

    //Mainha
    if(nome.value == 'marise'){                
        mae.textContent = nome.value;
        msg.textContent = 'Um feliz dia das mães mainha! Essa frase te lembra algo?'
        nome.value = '';
        // document.getElementById('homenagem').style.display = 'block';                
        document.getElementById('homenagem').style.backgroundImage = 'url(img/fundo.jpg)';                               
        document.getElementById('homenagem').style.transition = '.2s linear';
        btn.value = "outra mãe";
        if(btn.value == "outra mãe"){
            btn.onclick = reset;        
        }        
    }

    //Dona Sofia
    if(nome.value == 'sofia'){
        mae.textContent = 'Dnª ' +  nome.value;
        nome.value = '';
        msg.textContent = 'Um feliz dia das mães minha sogra! Essa é apenas uma pequenaem homenagem... '
        // document.getElementById('homenagem').style.display = 'block';        
        document.getElementById('homenagem').style.backgroundImage = 'url(img/fundo2.jpg)';                               
        document.getElementById('homenagem').style.transition = '.2s linear';
        btn.value = "outra mãe";
        if(btn.value == "outra mãe"){
            btn.onclick = reset;        
        }
    }

    //Taís
    if(nome.value == 'taís'){
        mae.textContent = nome.value;
        nome.value = '';
        msg.textContent = 'Um feliz dia das mães minha irmã! Esta mensagem é a definição do seu trabalho.'
        // document.getElementById('homenagem').style.display = 'block';        
        document.getElementById('homenagem').style.backgroundImage = 'url(img/fundo3.jpg)';                               
        document.getElementById('homenagem').style.transition = '.2s linear';
        btn.value = "outra mãe";
        if(btn.value == "outra mãe"){
            btn.onclick = reset;        
        }
    }
        
}

function reset(){
    document.getElementById('homenagem').style.backgroundImage = 'url(img/fundo0.jpg)';                                      
    document.getElementById('homenagem').style.transition = '.2s linear';
    btn.value = "visualizar";
    if(btn.value == "visualizar"){
        btn.onclick = mostrar;
    }    
    mae.textContent = '';   
    msg.textContent = '' ;
}