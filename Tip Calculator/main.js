let calculate=document.querySelector("#calculate");

calculate.addEventListener('click',()=>{
    let totalBill = document.querySelector('#totalBill').value;
    let tipPercent = document.querySelector('#tipPercent').value;
    let numberOfPeople = document.querySelector('#numberOfPeople').value;

    if(totalBill===''){
        alert('Please Enter a valid Bill Amount')
        return;
    }else if(tipPercent===''){
        alert('Please Select the Service');
        return;
    }else if(numberOfPeople==='' || numberOfPeople==0){
        alert('Please Enter a valid number of people sharing the Bill');
        return;
    }
    let total = (totalBill*tipPercent)/numberOfPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML=total;

})