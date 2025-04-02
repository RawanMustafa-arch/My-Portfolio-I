function mortCalc() {
    var price = document.Form1.Amount.value;
    price = parseFloat(price);

    if (isNaN(price) || price <= 0) {
        alert("Please enter a valid loan amount.");
        return;
    }

    var interest = document.Form1.Rate.value;
    interest = parseFloat(interest) / 100 / 12; // Convert annual % to monthly rate

    var numYears = document.Form1.Years.value;
    numYears = parseInt(numYears, 10);
    
    if (isNaN(numYears) || numYears <= 0) {
        alert("Please enter a valid number of years.");
        return;
    }

    var numMonths = numYears * 12;

    // Mortgage formula: M = P[r(1+r)^n] / [(1+r)^n – 1]
    var monthlyPayment = (price * interest * Math.pow(1 + interest, numMonths)) / (Math.pow(1 + interest, numMonths) - 1);

    if (isNaN(monthlyPayment) || !isFinite(monthlyPayment)) {
        alert("Invalid input. Please check your values.");
        return;
    }

    document.Form1.Payment.value = monthlyPayment.toFixed(2);
}