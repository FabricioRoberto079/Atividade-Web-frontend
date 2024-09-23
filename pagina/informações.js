const presentations = document.querySelectorAll('.presentation');

function alterarConteudo(event) {
    const presentation = event.currentTarget;

    // Verifica se já tem o conteúdo alterado, para retornar ao original
    if (presentation.dataset.originalContent) {
        presentation.innerHTML = presentation.dataset.originalContent;  // Retorna ao conteúdo original
        presentation.removeAttribute('data-original-content'); // Remove o atributo para restaurar o comportamento original
    } else {
        
        presentation.dataset.originalContent = presentation.innerHTML;

        
        presentation.innerHTML = `
            <img class="ft" src="../imgs/lixos.jpg" alt="Nova Imagem">
            <div class="text">
                <ul>
                    <li>Número: (79) 9xxxx-xxxx</li>
                    <li>Email: xxxxxx@gmail.com</li>
                    <li>Instagram: xxxxxx</li>
                </ul>
            </div>
        `;
    }
}

// Adiciona o evento de clique para cada apresentação
presentations.forEach(presentation => {
    presentation.addEventListener('click', alterarConteudo);
});
