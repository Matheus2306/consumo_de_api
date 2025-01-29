$(document).ready(function () {
  async function buscaDados() {
    $("#div-erro").hide();
    try {
      const response = await fetch("https://api.coinbase.com/v2/currencies");
      const dados = await response.json();
      prepararTabela(dados);
    } catch (e) {
      $("#div-erro").show();
    }
  }
  function prepararTabela(dados) {
    // inserindo os dados na tabela
    let linhas = $("#linhas");
    linhas.empty();
    $.each(dados.data, function (i, moeda) {
      var linhaAuxiliar = "";
      linhaAuxiliar =
        "<tr>" + "<td>" + moeda.id + "</td>" + "<td>" + moeda.name + "</tr>";
      linhas.append(linhaAuxiliar);
    });
  }
  function limparTabela() {
    $("#linhas").empty();
  }

  window.limparTabela = limparTabela;
  window.buscaDados = buscaDados;
});
