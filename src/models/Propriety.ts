import Player from "./Player";

/**
 * Define Propriety model
 */
export default class Propriety {
  valueSale: number;
  valueRent: number;
  owner: Player | null;

  constructor(valueSale?: number, valueRent?: number, owner?: Player | null) {
    const value = Math.floor(Math.random() * 3 + 1) * 100;
    this.valueSale = valueSale || value;
    this.valueRent = valueRent || value / 2;
    this.owner = owner || null;
  }
}
