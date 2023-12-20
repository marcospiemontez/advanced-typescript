export class Negociacao {
  constructor(
    private _data: Date,
    private _quantidade: number,
    private _valor: number,
  ) {}

  get data(): Date {
    const newDate = new Date(this._data.getTime())
    return newDate;
  }

  get quantidade(): number {
    return this._quantidade
  }

  get valor(): number {
    return this._valor
  }

  get volume(): number {
    return this._quantidade * this._valor;
  }

  public static criaDe(dataString: string, quantidadeString: string, valorString: string) {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }
}