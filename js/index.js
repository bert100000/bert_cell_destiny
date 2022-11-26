const phoneEl=document.querySelector("#phone-number")
const analyticEl=document.querySelector("#analytics");

console.log(phoneEl,analyticEl);

function analytics(){
    let phoneNumber = phoneEl.value;
    if(phoneNumber==""){
        alert("請輸入手機號碼");
        return;
    }
    if(phoneNumber.length<10){
        alert("手機號碼為10個數字");
        return;
    }

    //正則式

    const re=/\d{10}/;
    console.log(re.test(phoneNumber));





    console.log(phoneNumber);
}
analytics();