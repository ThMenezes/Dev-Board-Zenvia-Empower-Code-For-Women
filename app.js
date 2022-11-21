const nomes = document.querySelectorAll('.nome') //capturando todos os elementos com a classe nome
const input = document.querySelector('#busca')   //capturando o input de busca

//evento input para controlar toda alteração que é feita no input
input.addEventListener('input', () => {
  const textoDigitado = input.value.toLowerCase() //pego o value do input e já passo pra letras minúsculas

  //na linha 1 peguei todos os elementos com a classe nome, e o querySelectorAll nos retorna uma nodeList, numa nodeList podemos usar o forEach()
  nomes.forEach(nome => {
    const section = nome.parentNode //aqui eu pego o elemento mãe do nome através do parentNode
    const nomeLowerCase = nome.textContent.toLowerCase() //transformo o nome em letras minúsculas também pra não ter problemas de case sensitive

    //condição utilizando o método includes -> nomeLowerCase é uma string, o método includes funciona tanto em strings quando em arrays
    if(nomeLowerCase.includes(textoDigitado)){
      section.classList.remove('cartao-invisivel') //se o nome tiver o que foi digitado no input, "não faz nada", mas é importante colocar esse remove.('cartao-invisivel') para que se o conteúdo do input for apagado, não tenhamos problemas
    } else {
      section.classList.add('cartao-invisivel') //se não, adiciona a invisibilidade
    }
  })
})

/* Há alguns espaços que ficam "vazios" na página quando certos nomes são digitados, isso acontece devido aos tipos de display que vocês usaram nos cards de vocês. Mas não tem problema ter ficado assim, o importante é ter consciência disso e que num projeto mais complexo, vocês vão seguir muito mais padrões do que os que foram estabelecidos aqui. Além disso, também foi pedido para que colocassem a classe 'nome' na tag onde estaria o nome de vocês e que essa tag fosse filha direta da section cartoes, mas como nem todo mundo colocou, isso acaba gerando esses gaps na main também! Aí eu coloquei nos que faltaram, mas nem todo mundo criou a tag como filha direta do cartão. Novamente, sem problemas, o importante é levar isso em consideração num próximo projeto porque padrões de desenvolvimento são muito importantes! */

/* Outro ponto muito importante, tivemos várias tags <main> dentro do mesmo arquivo. Mais uma vez, como vocês eram iniciantes, não há problema nisso, mas é importante que a partir de agora vocês carreguem a documentação junto de vocês!
"Autores não devem incluir mais de um elemento main no mesmo documento"
https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/main
*/