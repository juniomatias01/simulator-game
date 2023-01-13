/**
 * Define Player model
 */
import { PlayerType } from "../utils/enums/PlayerType";
import Propriety from "./Propriety";

export default class Player {
  type: PlayerType;
  position: number;
  balance: number;
  proprieties: Array<Propriety>;

  constructor(
    type: PlayerType,
    position: number,
    balance: number = 300,
    proprieties: Array<Propriety> = []
  ) {
		this.type = type;
		this.position = position;
		this.balance = balance;
		this.proprieties = proprieties
	}
}
