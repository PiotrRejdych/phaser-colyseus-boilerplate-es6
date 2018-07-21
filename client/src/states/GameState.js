import { GameModel } from "../model/GameModel";
import { GameView } from "../view/GameView";
import { GameController } from "../controller/GameController";
import PlayerController from '../controller/PlayerController';

export class GameState extends Phaser.State {
	init(numberOfPlayers) {
		const gameModel = new GameModel(this.game.cache, numberOfPlayers);
		const gameView = new GameView(this.game);

		this._controller = new GameController(gameModel, gameView);
	}

	create() {
		this._lastFrameTime = this.game.time.now;
		this._controller.init();
	}

	update() {
		const deltaTime = this.game.time.now - this._lastFrameTime;
		this._controller.update(deltaTime);
		this._lastFrameTime = this.game.time.now;
	}
}