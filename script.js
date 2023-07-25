function calcularConsumo() {
    const totalAdultos = parseInt(document.getElementById('totalAdultos').value);
    const alcoolicoPresente = document.getElementById('alcoolico').checked;
    const happyHourEmpresa = document.getElementById('happyHour').checked;
    const tempoFesta = parseInt(document.getElementById('tempoFesta').value);
    const festaCrianca = document.getElementById('festaCrianca').checked;
  
    let consumoPorAdulto = 1.5;
  
    if (alcoolicoPresente) {
      consumoPorAdulto = 1.2;
    } else if (happyHourEmpresa) {
      consumoPorAdulto = 0.8;
    }
  
    if (tempoFesta > 6) {
      consumoPorAdulto *= 1.2; // Aumenta o consumo em 20%
    }
  
    if (festaCrianca) {
      consumoPorAdulto = Math.min(consumoPorAdulto, 1.0);
    }
  
    const consumoTotal = totalAdultos * consumoPorAdulto;
    document.getElementById('resultado').textContent = `Consumo estimado de bebidas: ${consumoTotal.toFixed(2)} litros`;
  }
  