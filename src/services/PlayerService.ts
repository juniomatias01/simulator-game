import Player from "../models/Player";
import Propriety from "../models/Propriety";
import { PlayerType } from "../utils/enums/PlayerType";

export default class PlayerService {
  buyProperty(player: Player, propriety: Propriety) {
    player.balance -= propriety.valueSale;
    player.proprieties.push(propriety);
    propriety.owner = player;
  }

  checkPlayerAndBuyProperty(player: Player, propriety: Propriety) {
    const demanding = propriety.valueSale > 50;
    const cautious = player.balance - propriety.valueRent >= 80;
    const random = Math.random() >= 0.5;
    const playerType = demanding
      ? PlayerType.Demanding
      : cautious
      ? PlayerType.Cautious
      : random
      ? PlayerType.Random
      : PlayerType.Impulsive;

    if (player.type === playerType) {
      this.buyProperty(player, propriety);
      return true;
    }
    return false;
  }

  buyPropertyRandom(player: Player, propriety: Propriety) {
    if (Math.random() >= 0.5) {
      this.buyProperty(player, propriety);
      return true;
    }
  }
  move(numberHouses: number, player: Player) {
    player.position += numberHouses;
    if (player.position >= 20) {
      player.position = player.position % 20;
      player.balance += 100;
    }
    return player;
  }
}
