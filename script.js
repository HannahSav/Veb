let xFlag=false;
let yFlag=false;
let rFlag=false;
let x = 100;
let r = 100;

let xValues = ["-5","-4","-3","-2","-1","0","1","2","3"];
let rValues = ["1","1.5","2","2.5","3"];


function getY(){
    return document.getElementById('yId').value;
}



function checkX(){
    var inp = document.getElementsByName('koordx');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            xFlag = true;
            x = xValues[i];
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
            r = rValues[i];
        }
    }
}

function createRequest(){
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

        $.ajax({
            type: "POST",
            url: "card.php",
            data: {x: x, y:y, r:r},
            succsess: function(result){
                $('.resultTable').append(result);
            }

        });
        
}
