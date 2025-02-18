const form = document.querySelector('form');
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('.result');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please provide a valid height.`;
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please provide a valid weight.`;
    } else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        let category = '';
        if (BMI < 18.6) {
            category = 'Underweight';
        } else if (BMI >= 18.6 && BMI <= 24.9) {
            category = 'Normal';
        } else {
            category = 'Overweight';
        }


        results.innerHTML = `Your BMI is <span>${BMI}</span> (<strong>${category}</strong>).`;
    
    }
});


