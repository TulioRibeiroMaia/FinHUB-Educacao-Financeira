function criarLivro() {
  var titulo = document.getElementById("tituloLivro").value;
  var autora = document.getElementById("autoraLivro").value;
  var sinopse = document.getElementById("sinopseLivro").value;
  var imagem = document.getElementById("imagemLivro").value;

  // Pega a lista já cadastrada, se não houver vira um array vazio
  var dadosLivro = JSON.parse(localStorage.getItem('livro') || '[]');
  // Adiciona pessoa ao cadastro
  dadosLivro.push({
      titulo: titulo,
      autora: autora,
      sinopse: sinopse,
      imagem: imagem
  });

  // Salva a lista alterada
  localStorage.setItem("livro", JSON.stringify(dadosLivro));
  // localStorage.clear();

  // console.log(dadosLivro);
  // PARA VISUALIZAR OS DADOS NO LOCALSTORAGE ACESSE AS FERRAMENTAS DO DESENVOLVEDOR (F12) NA ABA APLICAÇÃO, NO MENU LATERAL ESCOLHA ARMAZENAMENTO -> ARMAZENAMENTO LOCAL -> HTTP://...
}

function retornaDadoHTLM(dadosLivro){
  let array = Object.values(dadosLivro);

  var table = document.getElementById("bookTable");

  for(i=0; i<array.length; i++){
    var row = table.insertRow(i+1);
    var titulo = row.insertCell(0);
    var autora = row.insertCell(1);
    var acoes = row.insertCell(2);

    titulo.innerHTML = array[i].titulo;
    autora.innerHTML = array[i].autora;
    acoes.innerHTML = 'acao';
  }
}

function main() {
  var dadosLivro = JSON.parse(localStorage.getItem("livro"));
  let a = retornaDadoHTLM(dadosLivro);
}

main();

