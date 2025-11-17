document.addEventListener('DOMContentLoaded', function() {
    const textToType = "[ Loading profile... ]";
    const targetElement = document.getElementById('typing-effect');
    let index = 0;

    function type() {
        if (index < textToType.length) {
            targetElement.textContent += textToType.charAt(index);
            index++;
            const randomDelay = Math.random() * 150 + 50; 
            setTimeout(type, randomDelay);
        } else {
            targetElement.innerHTML += '<span class="cursor">_</span>';
        }
    }

    type();
});
