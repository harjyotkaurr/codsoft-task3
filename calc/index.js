let input= document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue=''
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttontext= e.target.innerText;
        console.log('button text is', buttontext);
        if (buttontext=='X'){
            buttontext = '*';
            screenValue += buttontext;
            input.value= screenValue
            
        }
        else if (buttontext=='='){
            ans= eval(screenValue);
            input.value=ans;
        }
        
        else if(buttontext=='AC'){
            screenValue=''
            input.value=screenValue;
        }
        else if(buttontext=='DEL'){
            screenValue=screenValue.substring(0,screenValue.length-1);
            input.value=screenValue;
        }
        
        else{
            screenValue += buttontext;
            input.value= screenValue  
        }
    })
}
    