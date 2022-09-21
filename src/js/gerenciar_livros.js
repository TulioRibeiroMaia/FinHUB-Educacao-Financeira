function criarLivro() {
  var nome = document.getElementById("tituloLivro").value;
  var autora = document.getElementById("autoraLivro").value;
  var sinopse = document.getElementById("sinopseLivro").value;
  var imagem = document.getElementById("imagemLivro").value;

  // Pega a lista já cadastrada, se não houver vira um array vazio
  var dadosLivro = JSON.parse(localStorage.getItem('livro') || '[]');
  // Adiciona pessoa ao cadastro
  dadosLivro.push({
      nome: nome,
      autora: autora,
      sinopse: sinopse,
      imagem: imagem
  });

  // Salva a lista alterada
  localStorage.setItem("livro", JSON.stringify(dadosLivro));

  // console.log(dadosLivro);
  // PARA VISUALIZAR OS DADOS NO LOCALSTORAGE ACESSE AS FERRAMENTAS DO DESENVOLVEDOR (F12) NA ABA APLICAÇÃO, NO MENU LATERAL ESCOLHA ARMAZENAMENTO -> ARMAZENAMENTO LOCAL -> HTTP://...

}

