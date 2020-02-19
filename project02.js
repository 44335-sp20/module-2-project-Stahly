var table = 3;
var operator = "addition";
var count = 1;
var msg = "";

if (operator == "addition"){
while (count <=10) {
    msg += (count + " + " + table + " = " + (count + table) + "<br>");
    count++;
    }  
    
}

else{
for(x = 0; x <= 11; x++){
    msg += (count + " * " + table + " = " + (count * table) + "<br>");
    }
}
var display = document.getElementById('blackboard');
display.innerHTML = msg;
