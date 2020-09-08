let xFlag=false;
let yFlag=false;
let rFlag=false;

let xValues = ["-5","-4","-3","-2","-1","0","1","2","3"];
let rValues = ["1","2","3","4","5"];

function getX(){
    return document.getElementById('xId').innerHTML;
}

function getY(){
    return document.getElementById('yId').value;
}

function getR(){
    return document.getElementById('rId').innerHTML;
}

function checkX(x){
    if ((x==='')) xFlag=false;
    else xFlag=true;
}

function checkY(y){
    if (y==='') yFlag=false;
    else if(y >= -5 && y <= 5) yFlag=true;
}

function checkR(r){
    if (r===''){ rFlag=false; return;}
    
    rFlag=true;
}

function createRequest(){
	let x = getX();
    let y = getY();
    let r = getR();

    xFlag=false;
    yFlag=false;
    rFlag=false;
    checkX(x);
    checkY(y);
    checkR(r);
 	if(!xFlag)document.getElementById('xText').innerHTML = ("хули Х не выбрал, мудак?" + y);
 	else document.getElementById('xText').innerHTML = "";
 	if(!yFlag)document.getElementById('yText').innerHTML = "либо не написан Y, либо ты не умеешь читать";
 	else document.getElementById('yText').innerHTML = "";
 	if(!rFlag)document.getElementById('rText').innerHTML = "выберите R, pidor"; 
 	else document.getElementById('rText').innerHTML = "";
}


