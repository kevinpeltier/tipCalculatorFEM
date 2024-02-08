const fivePercentTip = document.getElementById('5-percent-tip');
const tenPercentTip = document.getElementById('10-percent-tip');
const fifteenPercentTip = document.getElementById('15-percent-tip');
const twentyfivePercentTip = document.getElementById('25-percent-tip');
const fiftyPercentTip = document.getElementById('50-percent-tip'); 
const customTip = document.getElementById('custom-percent-tip');
const restBtn = document.getElementById('reset');

// const billAmount = document.getElementById("bill_amount").value;
// let testNum = Math.floor(billAmount * 2);


fivePercentTip.onclick = function() {
    const billAmount = parseInt(document.getElementById("bill_amount").value);
    const numberOfPeople = parseInt(document.getElementById("numOfPpl").value);
    let fivePercentOfTotalPerPerson = Math.abs(parseFloat(billAmount) * 0.05 / parseFloat(numberOfPeople)).toFixed(2);
    let fivePercentTotal = Math.abs(parseFloat(billAmount) / parseFloat(numberOfPeople)).toFixed(2);
    let fivePercentTotalDisplay = Math.abs(parseInt(fivePercentOfTotalPerPerson) + parseInt(fivePercentTotal)).toFixed(2);
    document.getElementById('tip-split').innerHTML = '$' + fivePercentOfTotalPerPerson;
    document.getElementById('total-split').innerHTML = '$' + fivePercentTotalDisplay;
};

tenPercentTip.onclick = function() {
    const billAmount = parseInt(document.getElementById("bill_amount").value);
    const numberOfPeople = parseInt(document.getElementById("numOfPpl").value);
    let fivePercentOfTotalPerPerson = Math.abs(parseFloat(billAmount) * 0.1 / parseFloat(numberOfPeople)).toFixed(2);
    let fivePercentTotal = Math.abs(parseFloat(billAmount) / parseFloat(numberOfPeople)).toFixed(2);
    let fivePercentTotalDisplay = Math.abs(parseInt(fivePercentOfTotalPerPerson) + parseInt(fivePercentTotal)).toFixed(2);
    document.getElementById('tip-split').innerHTML = '$' + fivePercentOfTotalPerPerson;
    document.getElementById('total-split').innerHTML = '$' + fivePercentTotalDisplay;
};

fifteenPercentTip.onclick = function () {
    const billAmount = parseInt(document.getElementById("bill_amount").value);
    const numberOfPeople = parseInt(document.getElementById("numOfPpl").value);
    let fivePercentOfTotalPerPerson = Math.abs(parseFloat(billAmount) * 0.15 / parseFloat(numberOfPeople)).toFixed(2);
    let fivePercentTotal = Math.abs(parseFloat(billAmount) / parseFloat(numberOfPeople)).toFixed(2);
    let fivePercentTotalDisplay = Math.abs(parseInt(fivePercentOfTotalPerPerson) + parseInt(fivePercentTotal)).toFixed(2);
    document.getElementById('tip-split').innerHTML = '$' + fivePercentOfTotalPerPerson;
    document.getElementById('total-split').innerHTML = '$' + fivePercentTotalDisplay;
};

twentyfivePercentTip.onclick = function () {
    const billAmount = parseInt(document.getElementById("bill_amount").value);
    const numberOfPeople = parseInt(document.getElementById("numOfPpl").value);
    let fivePercentOfTotalPerPerson = Math.abs(parseFloat(billAmount) * 0.25 / parseFloat(numberOfPeople)).toFixed(2);
    let fivePercentTotal = Math.abs(parseFloat(billAmount) / parseFloat(numberOfPeople)).toFixed(2);
    let fivePercentTotalDisplay = Math.abs(parseInt(fivePercentOfTotalPerPerson) + parseInt(fivePercentTotal)).toFixed(2);
    document.getElementById('tip-split').innerHTML = '$' + fivePercentOfTotalPerPerson;
    document.getElementById('total-split').innerHTML = '$' + fivePercentTotalDisplay;
};

fiftyPercentTip.onclick = function () {
    const billAmount = parseInt(document.getElementById("bill_amount").value);
    const numberOfPeople = parseInt(document.getElementById("numOfPpl").value);
    let fivePercentOfTotalPerPerson = Math.abs(parseFloat(billAmount) * 0.5 / parseFloat(numberOfPeople)).toFixed(2);
    let fivePercentTotal = Math.abs(parseFloat(billAmount) / parseFloat(numberOfPeople)).toFixed(2);
    let fivePercentTotalDisplay = Math.abs(parseInt(fivePercentOfTotalPerPerson) + parseInt(fivePercentTotal)).toFixed(2);
    document.getElementById('tip-split').innerHTML = '$' + fivePercentOfTotalPerPerson;
    document.getElementById('total-split').innerHTML = '$' + fivePercentTotalDisplay;
};


customTip.onchange = function() {
    const billAmount = parseInt(document.getElementById("bill_amount").value);
    const numberOfPeople = parseInt(document.getElementById("numOfPpl").value);
    let customTipConvert = Math.abs(parseInt(document.getElementById('custom-percent-tip').value) / 100);
    let fivePercentOfTotalPerPerson = Math.abs(parseFloat(billAmount) * customTipConvert / parseFloat(numberOfPeople)).toFixed(2);
    let fivePercentTotal = Math.abs(parseFloat(billAmount) / parseFloat(numberOfPeople)).toFixed(2);
    let fivePercentTotalDisplay = Math.abs(parseInt(fivePercentOfTotalPerPerson) + parseInt(fivePercentTotal)).toFixed(2);
    document.getElementById('tip-split').innerHTML = '$' + fivePercentOfTotalPerPerson;
    document.getElementById('total-split').innerHTML = '$' + fivePercentTotalDisplay;
};


restBtn.onclick = function () {
    location.reload();
} 











