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
    

    const re=/09\d{8}/;
    if (!re.test(phoneNumber)){
        alert("手機號碼格式不正確");
        return;
    }
     console.log(phoneNumber);
     analyticsPhoneNumber(phoneNumber);

}
//0968168168
function analyticsPhoneNumber(phoneNumber){
    let fourNumb = phoneNumber.substring(phoneNumber.length-4,phoneNumber.length);
    let code =parseInt((fourNumb/80 - parseInt(fourNumb/80))*80);
    console.log(code);
    return code;
}