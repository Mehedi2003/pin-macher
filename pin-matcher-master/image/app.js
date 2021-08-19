function getpin(){
    const pin = Math.round(Math.random() * 10000);
    const pinstring = pin + '';
    if(pinstring.length == 4){
        return pin;
    }
    else{
        return pin;
    }
}
function generatepin(){
 const pin = getpin();
 document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function(event){
  const number = event.target.innerText;
  const calcInput = document.getElementById('typed-numbers');
 if(isNaN(number)){
 if(number == 'C'){
 calcInput.value = '';
 }
 }
 else{
    const previousNumber = calcInput.value;
    const newcalcInput = previousNumber + number;
    calcInput.value = newcalcInput;
 }
  
});

function submitbtn(){
   const pin2 = document.getElementById('display-pin').value;
   const yourNumbers = document.getElementById('typed-numbers').value; 
   const success = document.getElementById('notifr-success');
   const fail = document.getElementById('notify-fail');
   if(pin2 == yourNumbers){
    
    success.style.display = 'block';
    fail.style.display = 'none';
   }
   else{
   
    fail.style.display = 'block';
    success.style.display = 'none';
   }
}