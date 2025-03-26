document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const serviceSelect = document.getElementById('service-type');
    const submitButton = document.querySelector('.submit-btn');
    const cardNumber = document.getElementById('card-number');
    const cvv = document.getElementById('cvv');

    // Service prices (you can adjust these)
    const prices = {
        'ambulance': 1500,
        'bed': 2000,
        'oxygen': 1000,
        'doctor': 2500
    };

    // Update price when service is selected
    serviceSelect.addEventListener('change', function() {
        const selectedService = this.value;
        const price = prices[selectedService] || 0;
        submitButton.textContent = `Complete Payment (₹${price})`;
    });

    // Format card number as user types
    cardNumber.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = '';
        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += ' ';
            }
            formattedValue += value[i];
        }
        e.target.value = formattedValue.trim();
    });

    // Validate form before submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            // Simulate form submission (replace with actual submission logic)
            simulatePaymentProcess();
        }
    });

    function validateForm() {
        let isValid = true;

        // Basic validation (you can add more complex validations)
        if (serviceSelect.value === '') {
            alert('Please select a service');
            isValid = false;
        }

        if (cardNumber.value.replace(/\s/g, '').length !== 16) {
            alert('Please enter a valid 16-digit card number');
            isValid = false;
        }

        if (cvv.value.length !== 3) {
            alert('Please enter a valid 3-digit CVV');
            isValid = false;
        }

        return isValid;
    }

    function simulatePaymentProcess() {
        submitButton.disabled = true;
        submitButton.textContent = 'Processing...';

        // Simulate API call
        setTimeout(() => {
            alert('Payment successful! Redirecting to confirmation page...');
            window.location.href = 'booking-confirmation.html';
        }, 2000);
    }

    // Add floating label effect
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.parentElement.classList.remove('focused');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('payment-form');
    const cardNumber = document.getElementById('card-number');
    const expiryMonth = document.getElementById('expiry-month');
    const expiryYear = document.getElementById('expiry-year');
    const cvv = document.getElementById('cvv');

    // Populate expiry month options
    for (let i = 1; i <= 12; i++) {
        const option = document.createElement('option');
        option.value = i.toString().padStart(2, '0');
        option.textContent = i.toString().padStart(2, '0');
        expiryMonth.appendChild(option);
    }

    // Populate expiry year options (current year + 10 years)
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i <= currentYear + 10; i++) {
        const option = document.createElement('option');
        option.value = i.toString();
        option.textContent = i.toString();
        expiryYear.appendChild(option);
    }

    // Card number formatting and validation
    cardNumber.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        e.target.value = value.trim();
    });

    // CVV validation
    cvv.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '');
    });

    // Form submission validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!validateCardNumber(cardNumber.value)) {
            alert('Please enter a valid card number.');
            return;
        }

        if (!validateExpiryDate(expiryMonth.value, expiryYear.value)) {
            alert('Please enter a valid expiry date.');
            return;
        }

        if (!validateCVV(cvv.value)) {
            alert('Please enter a valid CVV.');
            return;
        }

        // If all validations pass, you can submit the form
        alert('Payment information is valid. Processing payment...');
        // form.submit();
    });

    function validateCardNumber(number) {
        // Implement Luhn algorithm for card number validation
        number = number.replace(/\s/g, '');
        if (!/^\d{13,19}$/.test(number)) return false;
        
        let sum = 0;
        let double = false;
        for (let i = number.length - 1; i >= 0; i--) {
            let digit = parseInt(number.charAt(i), 10);
            if (double) {
                digit *= 2;
                if (digit > 9) digit -= 9;
            }
            sum += digit;
            double = !double;
        }
        return (sum % 10) == 0;
    }

    function validateExpiryDate(month, year) {
        const currentDate = new Date();
        const expiryDate = new Date(year, month - 1);
        return expiryDate > currentDate;
    }

    function validateCVV(cvv) {
        return /^[0-9]{3,4}$/.test(cvv);
    }
});

