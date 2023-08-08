//SELECIONAR OS PERSONAGENS DA LISTA
const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
       //removendo selecao do ciclope e acrescentando no personagem que o mouse passar
        const persoangemSelecionado = document.querySelector('.selecionado');
        persoangemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        //alterar imagem personagem
        const imagemPersonagemSelecionado = document.querySelector('.personagem-grande');
        const idPersonagem = personagem.attributes.id.value;
        
        imagemPersonagemSelecionado.src = `../src/imagens/card-${idPersonagem}.png`;
        
        //alterar nome personagem
        const nomePersonagemSelecionado = document.getElementById('nome-personagem');
        nomePersonagemSelecionado.innerText = personagem.getAttribute('data-name');

        //alterar descrição personagem
        const descricaoPersonagemSelecionado = document.getElementById('descricao-personagem');
        descricaoPersonagemSelecionado.innerText = personagem.getAttribute('data-description');
    })
})