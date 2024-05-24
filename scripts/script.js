document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('clock');
    

    async function fetchTime() {
        try {
            const response = await fetch('https://worldtimeapi.org/api/timezone/America/Sao_Paulo');
            const data = await response.json();
            const dateTime = new Date(data.datetime);
            const hours = String(dateTime.getHours()).padStart(2, '0');
            const minutes = String(dateTime.getMinutes()).padStart(2, '0');
            const seconds = String(dateTime.getSeconds()).padStart(2, '0');
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        } catch (error) {
            console.error('Erro ao buscar a hora:', error);
            clockElement.textContent = 'Erro ao buscar a hora';
        }
    }

    fetchTime();
    setInterval(fetchTime, 1000);
});