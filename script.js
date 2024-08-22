//Funcion abrir carta
const envelope = document.querySelector('.envelope-wrapper');
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('flap');
});
//Funcion contador
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar el mensaje de alerta
    const startCountdown = confirm('Se iniciará un contador y cuando llegue a 0 serás transportada a una página, no olvides abrir el sobre (Toca el sobre)');
    if (startCountdown) {
        let timeLeft = 17;
        const counterElement = document.getElementById('counter');
        counterElement.textContent = `Tiempo restante: ${timeLeft} segundos`;
        const countdown = setInterval(() => {
            timeLeft--;
            counterElement.textContent = `Tiempo restante: ${timeLeft} segundos`;
            if (timeLeft <= 0) {
                clearInterval(countdown);
                window.location.href = "Girasoles/index.html";
            }
        }, 1000);
    }
});
