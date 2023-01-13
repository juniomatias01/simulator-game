import Player from "../models/Player";
import { PlayerType } from "../utils/enums/PlayerType";
import BoardService from "./BoardService";
import PlayerService from "./PlayerService";

export default class GameService {
  players: Array<Player>;
  playerService: PlayerService;
  playerOfTime: Player;
  boardService: BoardService;
  rounds: number;

  constructor() {
    this.rounds = 0;
    this.players = [
      new Player(PlayerType.Impulsive, 0),
      new Player(PlayerType.Demanding, 0),
      new Player(PlayerType.Cautious, 0),
      new Player(PlayerType.Random, 0),
    ];
    this.playerService = new PlayerService();
    this.boardService = new BoardService();
  }
  simulate() {
    const result = {
      vencedor: "",
      jogadores: [] as Array<PlayerType>,
    };
    while (this.players.length > 1) {
      for (let player of this.players) {
        if (!result.jogadores.includes(player.type))
          result.jogadores.push(player.type);
        const numberHouses = Math.floor(Math.random() * 6) + 1;
        this.playerService.move(numberHouses, player);
        const propriety = this.boardService.getProprietyByPlayerPosition(
          player.position
        );
        if (!propriety.owner) {
          if (player.balance >= propriety.valueSale) {
            this.playerService.checkPlayerAndBuyProperty(player, propriety);
          }
        } else {
          // pay rent
          player.balance -= propriety.valueRent;
          propriety.owner.balance += propriety.valueRent;
        }
        // verificar se o player ficou com saldo negativo
        if (player.balance < 0) {
          // remover player do jogo

          this.players = this.players.filter((j) => j !== player);
          // deixar proprietys do player disponíveis para compra
          for (let p of player.proprieties) {
            p.owner = null;
          }
        }
        // verificar se restou somente um player com saldo positivo
        if (this.players.filter((j) => j.balance > 0).length === 1) {
          // retornar nome do player vencedor
          const [player] = this.players.filter((j) => j.balance > 0);
          result.vencedor = player.type;

          return result;
        }
        // incrementar rodadas
        this.rounds++;
        // verificar se o jogo deve ser interrompido por durar muito
        if (this.rounds === 1000) {
          // retornar player com mais saldo na milésima rodada
          const [player] = this.players.sort((a, b) => b.balance - a.balance);
          result.vencedor = player.type;

          return result;
        }
      }
    }
  }
}
