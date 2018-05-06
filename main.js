function threeFive(startIndex, stopIndex, threeCallback, fiveCallback)
{
    const arr=[];
    for(let i=startIndex; i<=stopIndex; i++)
    {
        arr.push(i);
    }
    for(let j=0;j<arr.length;j++){
        if(j % 3 === 0){
            threeCallback(j);
        }
        if(j % 5 === 0){
            fiveCallback(j);
        }
    }

}
function sayThree(num){
    //console.log('${num} can be divided by 3');
    console.log('the ' +num+ 'can be divided by 3');
}

function sayFive(num){
    console.log('the '+ num + 'can be divided by 5');
}
threeFive(0, 15, sayThree, sayFive);

function repeatStringNumTimes(str, num){
    let newStr = '';

    for(let i=0; i<num; i++){
        newStr+=str;
    }
    return newStr;
}

function repeatStringNumTimes1(str, num){
    let newStr = '';

   while(num >0){
        newStr+=str;
        num--;
    }
    return newStr;
}
function repeatStringNumTimes2(str, num){
    let newStr = '';

   do{
        newStr+=str;
        num--;
   }while(num >0)

    return newStr;
}
console.log(repeatStringNumTimes2('abc ',4));
console.log(repeatStringNumTimes1('abc ',3));
console.log(repeatStringNumTimes('abc ',2));



var x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
}
f1(x);
console.log(x);


var y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);