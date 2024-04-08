document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('scrumForm');
    const dadosScrumTeam = document.getElementById('dados-scrum-team');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Cria um objeto para armazenar os dados do Scrum Team
        const scrumTeamData = {
            nome: form.querySelector('#mementomori').value,
            justificativa: form.querySelector('#justificativa').value,
            membros: [],
            dailyMeeting: form.querySelector('#daily-meeting').value,
            dataApresentacao: form.querySelector('#data-apresentacao').value,
            timeboxPitch: form.querySelector('#timebox-pitch').value,
            membrosApresentacao: Array.from(form.querySelector('#membros-apresentacao').selectedOptions).map(option => option.text)
        };

        // Obtém os dados dos membros do Scrum Team
        const membrosList = form.querySelectorAll('#membrosList li');
        membrosList.forEach(member => {
            const nome = member.querySelector('input[type="text"]').value;
            const cargo = member.querySelector('select').value;
            scrumTeamData.membros.push({ nome, cargo });
        });

        // Exibe os dados do Scrum Team
        dadosScrumTeam.innerHTML = `
            <h3>Dados do Scrum Team</h3>
            <p><strong>Nome do Scrum Team:</strong> ${scrumTeamData.nome}</p>
            <p><strong>Justificativa do nome:</strong> ${scrumTeamData.justificativa}</p>
            <p><strong>Membros do Scrum Team:</strong></p>
            <ul>
                ${scrumTeamData.membros.map(member => `<li>${member.nome} - ${member.cargo}</li>`).join('')}
            </ul>
            <p><strong>Daily Meeting:</strong> ${scrumTeamData.dailyMeeting}</p>
            <p><strong>Data da Apresentação:</strong> ${scrumTeamData.dataApresentacao}</p>
            <p><strong>Timebox do Pitch:</strong> ${scrumTeamData.timeboxPitch}</p>
            <p><strong>Membros que farão a Apresentação:</strong> ${scrumTeamData.membrosApresentacao.join(', ')}</p>
        `;
    });
});
