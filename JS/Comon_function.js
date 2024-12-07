//function for get value from input field;;;
function getValue(id){
    const value=document.getElementById(id).value;
    const valueNum=parseFloat(value)
    return valueNum
}

//function for get text value from text type tag;;
function getInnerText(id){
    const value=document.getElementById(id).innerText;
    const valueNum=parseFloat(value)
    return valueNum
}



