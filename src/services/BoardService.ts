import Player from "../models/Player";
import Propriety from "../models/Propriety";
import { PlayerType } from "../utils/enums/PlayerType";

export default class BoardService {
  private players: Array<Player>;
  private proprieties: Array<Propriety>;

  constructor() {
    this.proprieties = [];
    Array.from({ length: 20 }).forEach(() => {
      this.proprieties.push(new Propriety());
    });
  }
  payRent(player: Player) {
    const propriety = this.getProprietyByPlayerPosition(player.position);
    if (propriety.owner !== null && propriety.owner !== player) {
      player.balance -= propriety.valueRent;
      propriety.owner.balance += propriety.valueRent;
    }
  }
  getProprietyByPlayerPosition(position: number) {
    return this.proprieties[position];
  }
  getPlayers() {
    return this.players;
  }
}
