// Data alvo (9 de dezembro)
const targetDate = new Date('April 26, 2025 10:00:00').getTime();

const interval = setInterval(function () {
    // Data atual
    const currentDate = new Date().getTime();

    // Calcula a diferença em milissegundos
    const difference = targetDate - currentDate;

    // Calcula dias, horas, minutos e segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Formata os valores para dois dígitos
    const formattedDays = days.toString().padStart(2, '0');
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    // Atualiza o elemento HTML
    document.getElementById('countdown').innerHTML = `<div>${formattedDays}<span>DIAS</span></div> : <div>${formattedHours}<span>HORAS</span></div> : <div>${formattedMinutes}<span>MIN</span></div> : <div>${formattedSeconds}<span>SEG</span></div>`;

    // Se a data alvo for atingida, limpa o intervalo
    if (difference < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = '<div>Evento Encerrado</div>';
    }
}, 1000);

