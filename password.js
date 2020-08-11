var huruf='abcdefghijklmnopqrstuvwxyz'
var kapital='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var number='1234567890'

const passworld=(Password)=>{
    var nkapitalC = countContain(Password, kapital)
    var nhurufC = countContain(Password, huruf)
    var nhurufkapitalCount = nkapitalC + nhurufC
    var nnumC=countContain(Password, number)
    var output=''
    if(nkapitalC!=0 && nhurufC!=0 && nnumC!=0 && Password.length>8 && Password.length<13){
        output='Strong'
    }else if(nkapitalC!=0 && nhurufC!=0 && Password.length>4 && Password.length<8){
        output='medium'
    }else if(nhurufkapitalCount!=0 && nnumC!=0 && Password.length>4 && Password.length<8){
        output='medium'
    }else if(nhurufC!=0 && nnumC!=0 && Password.length>=4 && Password.length<=8){
        output='medium'
    }else{
        output='Weaklings'
    }
return output
}

    function countContain(Password, strCheck){
    var nCount = 0;

    for (i = 0; i < Password.length; i++) 
    {
        if (strCheck.indexOf(Password.charAt(i)) > -1) 
        { 
                nCount++;
        } 
    } 

    return nCount; 
} 
console.log(passworld('Rabino012'))