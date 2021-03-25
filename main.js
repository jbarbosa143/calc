// night mode========================================
const nightM = document.getElementById('nightMode');
nightM.addEventListener('click', function(){
    document.querySelector('#container').style.backgroundImage = "url('https://media.giphy.com/media/aZ3LDBs1ExsE8/giphy.gif')";
    console.log('nightmode clicked');
});

// day mode =======================================
const dayM = document.getElementById('daymode');
dayM.addEventListener('click', function(){
    document.querySelector('#container').style.backgroundImage ="url('https://media.giphy.com/media/qCfQ28HLs61r2/giphy.gif')";
}) 

// =============================Const's=================================
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const decimal = document.querySelector('.decimal')
const clear = document.querySelector('.clear')
const sum = document.querySelector('.sum')
const result = document.getElementById('total')
const num1 = [];
const num2 = [];
const oper = [];

// =====================================Button Listener==================

for (const number of numbers) {
    number.addEventListener('click',numInput)   
}

for( const operator of operators){
    operator.addEventListener('click', operInput) 
}

decimal.addEventListener('click', function(){
    console.log(decimal.innerText)
});

clear.addEventListener('click', clean);

sum.addEventListener('click', calculate)

// =====================================MATH===============================
let value = 0;
function calculate(){
    if(oper.length !== 0){
        if(oper[0] === '+'){
            // stringnum *1 turns string back into an interger
        value = num1.join('')*1 + num2.join('') *1;
    }
        else if(oper[0] === '-'){
        value = num1.join('') *1 - num2.join('') *1;
    }
        else if(oper[0] === '&times;'){
        value = num1.join('')*1 * num2.join('')*1;
    }
        else if( oper[0] === '&#247;'){
        value = ((num1.join('')*1) / (num2.join('')*1));
    }
        
    }else{
        value = num1.join('')*1;
    }
    result.innerText=parseFloat(value.toFixed(6));

    reset();

    num1[0] = parseFloat(value.toFixed(6));
}

//================================= Functions==================================
// ==== update screen====
function updateTotal(){
    if(oper.length === 0){
        result.innerText = num1.join('');
    }else{
        result.innerText = num1.join('') + oper + num2.join('');
    }
}
// ====num button---
function numInput(event){
    if(oper.length === 0){
        num1.push(event.target.innerText);
    }else{
        num2.push(event.target.innerText);
    }
    updateTotal();
}
// ===== operator function====
function operInput(event){
    if(oper.length === 0){
        // getTotal();
        oper[0] = event.target.innerText;
    }else{
        for(const operator of operators){
            oper[0] === event.target.innerText;
        }
    }
    updateTotal();
}

// ==============Screen reset/clear================
function reset(){
    num1.splice(0);
    num2.splice(0);
    oper.splice(0);
    
}

function clean(){
    reset();
    result.innerText =0;
}