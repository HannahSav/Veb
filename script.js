let xFlag=false;
let yFlag=false;
let rFlag=false;

let xValues = ["-5","-4","-3","-2","-1","0","1","2","3"];
let rValues = ["1","2","3","4","5"];


function getY(){
    return document.getElementById('yId').value;
}



function checkX(){
    var inp = document.getElementsByName('koordx');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            xFlag = true;
        }
    }
}

function checkY(y){
    if (y==='') yFlag=false;
    else if(y >= -5 && y <= 5) yFlag=true;
}

function checkR(){
    var inp = document.getElementsByName('radius');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            rFlag = true;
        }
    }
}

function createRequest(){
    let x = 0;
    let r = 6;
    let y = getY();
    xFlag=false;
    yFlag=false;
    rFlag=false;
    checkX();
    checkY(y);
    checkR();
 	if(!xFlag)document.getElementById('xText').innerHTML = "выберите X";
 	else document.getElementById('xText').innerHTML = "";
 	if(!yFlag)document.getElementById('yText').innerHTML = "выберите Y от -5 до 5";
 	else document.getElementById('yText').innerHTML = "";
 	if(!rFlag)document.getElementById('rText').innerHTML = "выберите R"; 
 	else document.getElementById('rText').innerHTML = "";
    if(xFlag && yFlag && rFlag)
        $.get('card.php', {'x':x, 'y':y, 'r':r}, function (data) {document.getElementById('resultTable').innerHTML+=data;});
}


