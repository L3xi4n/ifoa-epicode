class Panino {
  constructor(pane, ingrediente1, ingrediente2, salsa) {
    this.pane = pane;
    this.ingrediente1 = ingrediente1;
    this.ingrediente2 = ingrediente2;
    this.salsa = salsa;
  }
  prezzoPanino() {
    if (this.pane == "pane") {
      console.log("1 euro per i poveri");
    }
  }
}

const panino1 = new Panino("pane", "tomate", "salad", "ketchup");
const panino2 = new Panino("pane", "tomate", "carne", "ketchup");

panino1.prezzoPanino();
