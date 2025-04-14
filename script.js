const textInput = document.getElementById('text-input');
const result = document.getElementById('result');
const submit = document.getElementById('check-btn');

const checker = () => {
    const input = textInput.value;

    if (!input.trim()) {
        alert('Please input a value');
        return;
    }

    const original = input;
    const cleaned = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');

    if (cleaned === reversed) {
        result.textContent = `${original} is a palindrome.`;
    } else {
        result.textContent = `${original} is not a palindrome.`;
    }
};

submit.addEventListener('click', checker);