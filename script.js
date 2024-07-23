document.getElementById('conversionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // previnir o comportamento padrão do formulário de resetar
  
    const inputValue = document.getElementById('inputValue').value;
    const unit = document.getElementById('unitSelect').value;
    let result = 0;
  
    switch(unit) {
      case 'yard':
        result = inputValue * 1.094;
        break;
      case 'foot':
        result = inputValue * 3.281;
        break;
      case 'inch':
        result = inputValue * 39.37;
        break;
      case 'mile':
        result = inputValue * 0.000621;
        break;
    }
  
    document.getElementById('result').innerText = `Resultado: ${result.toFixed(3)} ${unit}(s)`;
  });
  