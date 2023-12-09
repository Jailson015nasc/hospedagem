// ResultHorario
  // Função para obter a data e hora atual formatada
  function getCurrentDateTime() {
    const now = new Date();
    const options = { month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    return now.toLocaleDateString('pt-BR', options);
  }

  // Função para atualizar os elementos HTML com a data e hora atual
  function updateDateTime() {
    const currentDateTime = getCurrentDateTime();

    // Atualizar elementos apenas para check-in
    document.getElementById("checkInDate").textContent = currentDateTime.split(" ")[0];
    document.getElementById("checkInTime").textContent = currentDateTime.split(" ")[1];
  }

  // Chamar a função para a primeira atualização
  updateDateTime();

  // Atualizar a cada segundo
  setInterval(updateDateTime, 1000);


  