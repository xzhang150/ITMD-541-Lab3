document.addEventListener('DOMContentLoaded', function() {
    const billTotalInput = document.getElementById('bill-total');
    const tipInput = document.getElementById('tip');
    const tipValueDisplay = document.getElementById('tip-value');
    const tipPercentageDisplay = document.getElementById('tip-percentage');
    const tipAmountDisplay = document.getElementById('tip-amount');
    const totalBillDisplay = document.getElementById('total-bill');

    function calculateTip() {
        const billTotal = parseFloat(billTotalInput.value);
        const tipPercentage = parseInt(tipInput.value);

        if (isNaN(billTotal)) {
            alert('Please enter a valid number for the bill total.');
            return;
        }

        const tipAmount = billTotal * (tipPercentage / 100);
        const totalBill = billTotal + tipAmount;

        tipValueDisplay.textContent = tipInput.value + '%';
        tipPercentageDisplay.value = `${tipPercentage.toFixed(2)}%`;
        tipAmountDisplay.value = `$${tipAmount.toFixed(2)}`;
        totalBillDisplay.value = `$${totalBill.toFixed(2)}`;
    }

    billTotalInput.addEventListener('input', calculateTip);
    tipInput.addEventListener('input', calculateTip);
});

