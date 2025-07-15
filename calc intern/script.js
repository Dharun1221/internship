
const display=document.getElementById("display");


function displayvalue(val)

{
    
      display.value += val;
    

}
function cleardisplay()
{
    display.value  ="";
}

function calc()
{
    
      display.value=eval(display.value);
}