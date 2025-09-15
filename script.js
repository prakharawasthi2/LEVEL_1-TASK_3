document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const degreeInput = document.getElementById('degree').value;
    const degree = parseFloat(degreeInput);
    const type = document.getElementById('type').value;
    let resultValue;

    if (isNaN(degree)) {
        resultValue = 'Please enter a valid number';
    } else {
        if (type === 'F') {
            // Convert Celsius to Fahrenheit
            resultValue = (degree * 9/5) + 32 + '°F';
        } else if (type === 'C') {
            // Convert Fahrenheit to Celsius
            resultValue = ((degree - 32) * 5/9).toFixed(2) + '°C';
        } else {
            resultValue = 'Please select a conversion option.';
        }
    }
    document.getElementById('result').value = resultValue;
});
