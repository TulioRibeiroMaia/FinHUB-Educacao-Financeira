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

    var id = i;

    titulo.innerHTML = array[i].titulo;
    autora.innerHTML = array[i].autora;
    // TO-DO: colocar o id do botão dinâmico
    acoes.innerHTML = "<button type='button' class='btn btn-primary' id='id' onclick='editarLivro()' >Editar</button> &nbsp <button type='button' class='btn btn-danger' id='id' onclick='excluirLivro()' >Excluir</button>";
    
    
  }
}

function editarLivro() {  
  let dadosLivro = JSON.parse(localStorage.getItem('livro'));
  let array = Object.values(dadosLivro);
  // console.log(array[1]);

 //retorna o id do botão
  document.querySelectorAll("button").forEach( function(button) {
    
    button.addEventListener("click", function(event) {
    const el = event.target || event.srcElement;
    const id = el.id;
    console.log(id);
  });
  
});
}

function excluirLivro() {
  console.log("excluir");
}

function main() {
  var dadosLivro = JSON.parse(localStorage.getItem("livro"));
  let a = retornaDadoHTLM(dadosLivro);
}

main();

