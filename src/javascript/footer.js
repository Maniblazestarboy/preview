 // Opcional: Adicionar interatividade

 document.querySelectorAll('.btn-agendar').forEach(btn => {

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Redirecionando para página de agendamento...');
    });
});