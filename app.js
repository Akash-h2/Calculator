let display = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string ='';

buttonsArray.forEach(function(btn){
   btn.addEventListener('click',function(event){
     

   if(event.target.innerHTML == 'x'){
       string = string.substring(0,string.length-1);
       display.value = string;
    }
    else if(event.target.innerHTML == 'AC'){
    string ='';
     display.value = string;
    }
    else if(event.target.innerHTML == '='){
        try{
            string = eval(string);
        }catch(e){
            string ='error';
        }
        display.value = string;
    }
    else{
        if(isOperator(event.target.innerhtml) &&  (string.length === 0 || isOperator(string[string.length-1]))){
            return;
        }
        string += event.target.innerHTML;
        display.value = string;
    }
    
   });

});
function isOperator(char){
    return['+','-','*','/'].includes(char);
} 

