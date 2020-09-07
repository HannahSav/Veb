let xFlag=false;
let yFlag=false;
let rFlag=false;

let xValues = ["-5","-4","-3","-2","-1","0","1","2","3"];
let rValues = ["1","2","3","4","5"];

function getX(){
    return document.getElementById('koordx').innerHTML;
}

function getY(){
    return document.getElementById('koordy').value;
}

function getR(){
    return document.getElementById('radius').innerHTML;
}

function checkX(x){
    if ((x==='') || (xValues.indexOf(x)===-1)) xFlag=false;
    else xFlag=true;
}

function checkY(y){
    if (y==='') yFlag=false;
    else if(y >= -5 && y <= 5) yFlag=true;
}

function checkR(r){
    if (r.length===0){ rFlag=false; return;}
    for (let i=0; i<r.length; i++) if (rValues.indexOf(r[i])===-1){ rFlag=false; return;}
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
    if (!xFlag) document.getElementById('koordX').innerHTML='Не выбрано значение X'; else document.getElementById('koordx').innerHTML=null;
    if (!yFlag) document.getElementById('koordY').innerHTML='Введено недопустимое значение Y'; else document.getElementById('koordy').innerHTML=null;
    if (!rFlag) document.getElementById('radius').innerHTML='Не выбрано значение R'; else document.getElementById('radius').innerHTML=null;

    if (!rFlag || !yFlag || !xFlag) {
        return;
    }

    for (let i=0; i<r.length; i++) {
        $.get('card.php', {'koordx':x, 'koordy':y, 'radius':r[i]}, function (data) {document.getElementById('resultTable').innerHTML+=data;});
    }
}


