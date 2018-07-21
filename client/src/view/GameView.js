export class GameView extends Phaser.Group {
	constructor(game) {
		super(game);
		this.game = game;
	}

	prepareScene(playersCount) {
		this.game.stage.backgroundColor = "#4488AA";

		const text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "RUSKIE", { font: "65px Arial", fill: "#ff0044", align: "center" });
		text.anchor.set(0.5);
	}
}