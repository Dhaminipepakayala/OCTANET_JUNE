

var counts = setInterval(update);
var upto = 0;
function update(){
    let cnt1=document.getElementById('counter1');
    let cnt2=document.getElementById('counter2');
    let cnt3=document.getElementById('counter3');
    cnt1.innerHTML=upto;
    cnt2.innerHTML=upto;
    cnt3.innerHTML=upto;
    
    if(upto===1234)
    clearInterval(counts);
    upto++;

}
var yr=document.getElementById('year');
var date=new Date();
yr.innerHTML=date.getFullYear();