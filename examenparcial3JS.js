document.getElementById('formularioPropina').addEventListener('submit', function(e) {
  e.preventDefault();

  const subtotal = parseFloat(document.getElementById('subtotal').value);
  const porcentaje = parseFloat(document.getElementById('porcentaje').value);

  if (isNaN(subtotal) || isNaN(porcentaje)) {
    document.getElementById('resultado').innerHTML = "Por favor, llena todos los campos correctamente.";
    return;
  }

  const propina = subtotal * (porcentaje / 100);
  const total = subtotal + propina;

  document.getElementById('resultado').innerHTML = `
    <p>Subtotal: $${subtotal.toFixed(2)} MXN</p>
    <p>Propina (${porcentaje}%): $${propina.toFixed(2)} MXN</p>
    <p><strong>Total a pagar: $${total.toFixed(2)} MXN</strong></p>
  `;
});

