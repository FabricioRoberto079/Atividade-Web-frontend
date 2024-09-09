const presentations = document.querySelectorAll('.presentation');

// Função para alterar o conteúdo da div ao clicar
function alterarConteudo(event) {
    const presentation = event.currentTarget;

    // Substitui o conteúdo da div clicada com um link "Exit"
    presentation.innerHTML = `
        <img class="ft" src="/imgs/lixos.jpg" alt="Nova Imagem">
        <div class="text">
            <ul>
                <li>Número: (79) 9xxxx-xxxx</li>
                <li>Email: xxxxxx@gmail.com</li>
                <li>Instagram: xxxxxx</li>
            </ul>
        </div>
    `;
}

presentations.forEach(presentation => {
    presentation.addEventListener('click', alterarConteudo);
});