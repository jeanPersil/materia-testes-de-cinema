export class Calculadora {
  constructor(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;
  }

  soma() {
    return this.n1 + this.n2;
  }

  sub() {
    return this.n1 - this.n2;
  }

  mult() {
    return this.n1 * this.n2;
  }

  div() {
    if (this.n2 == 0) {
      return "não é possivel dividir por 0";
    }

    return this.n1 / this.n2;
  }
}
