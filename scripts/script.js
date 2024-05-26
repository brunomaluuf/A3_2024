document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('clock');
    const menuIcon = document.getElementById('menu-icone');
    const menu = document.getElementById('menu');
    const cpfInput = document.getElementById('cpf');
    const rgInput = document.getElementById('rg');

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('open');
    });

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

    cpfInput.addEventListener('input', () => {
        let value = cpfInput.value.replace(/\D/g, ''); 
        if (value.length > 11) value = value.slice(0, 11); 

        if (value.length <= 11) {
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        }
        cpfInput.value = value;
    });

    rgInput.addEventListener('input', () => {
        let value = rgInput.value.replace(/\D/g, ''); 
        if (value.length > 9) value = value.slice(0, 9); 

        if (value.length <= 9) {
            value = value.replace(/(\d{2})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1})$/, '$1-$2');
        }
        rgInput.value = value;
    });
});


/*function cadastrar(){
    alert("Cadastro realizado com sucesso.")

    VERIFICAR COMO FAZER O ALERTA APARECER SÓ DPS DE PREENCHER TUDO.
}*/ 