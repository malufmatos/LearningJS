class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    this.ligada = false;
  }

  ligar() {
    this.ligada = true;
  }

  desligar() {
    this.ligada = false;
  }

  aumentarVolume() {
    if (this.ligada && this.volume < 100) {
      this.volume++;
    }
  }

  diminuirVolume() {
    if (this.ligada && this.volume > 0) {
      this.volume--;
    }
  }
}

const controle = new ControleRemoto("LG");
controle.ligar();
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
controle.diminuirVolume();
console.log(
  `TV: ${controle.tv}, Volume: ${controle.volume}, Ligada: ${controle.ligada}`
);
controle.desligar();
console.log(
  `TV: ${controle.tv}, Volume: ${controle.volume}, Ligada: ${controle.ligada}`
);
controle.aumentarVolume();
console.log(
  `TV: ${controle.tv}, Volume: ${controle.volume}, Ligada: ${controle.ligada}`
);
controle.ligar();
console.log(
  `TV: ${controle.tv}, Volume: ${controle.volume}, Ligada: ${controle.ligada}`
);
