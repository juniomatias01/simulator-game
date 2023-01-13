/**
 * Define the API base url
 
 */
import GameService from "../services/GameService";
const gameService = new GameService();

class GameController {
  public static index(req, res, next): any {
    const result = gameService.simulate();
    return res.json(result);
  }
}

export default GameController;
