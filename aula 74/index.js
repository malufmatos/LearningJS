function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

ValidaCPF.prototype.valida = function () {
  if (!this.cpfLimpo) return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.geraDigito(cpfParcial);
  const digito2 = this.geraDigito(cpfParcial + digito1);

  const novoCPF = cpfParcial + digito1 + digito2;
  return novoCPF === this.cpfLimpo;
};

ValidaCPF.prototype.geraDigito = function (cpfParcial) {
  let soma = 0;
  let multiplicador = cpfParcial.length + 1;

  for (let i = 0; i < cpfParcial.length; i++) {
    soma += cpfParcial[i] * multiplicador;
    multiplicador--;
  }

  const primeiroDigito = 11 - (soma % 11);
  return primeiroDigito > 9 ? 0 : String(primeiroDigito);
};

ValidaCPF.prototype.isSequencia = function () {
  return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
};

const cpf = new ValidaCPF("478.654.256-02");

if (cpf.valida()) {
  console.log("CPF Válido");
} else {
  console.log("CPF Inválido");
}
