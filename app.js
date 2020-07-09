function getNumber (num)
{
    var result = document.getElementById('result');
    result.value += num; 
}

function clearBtn()
{
    var clbtn = document.getElementById('result');
    clbtn.value = ""; 
}

function setZero()
{
    var setvalzero = document.getElementById('result');
    setvalzero.value = "0";
     
}

function  getResult()
{
    var r = document.getElementById('result');
    console.log(r.value);
    r.value = eval(r.value);    
}

