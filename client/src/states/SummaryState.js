import { Button } from "../components/Button";

export class SummaryState extends Phaser.State {
	init(winnerPlayer, playersCount) {
		this._winnerPlayer = winnerPlayer;
		this._playersCount = playersCount;
	}

	create() {
		const bg = this.game.add.tileSprite(0, 0, this.game.width, this.game.cache.getImage('background').height, 'background');
		//const replayButton = this._createReplayButton();
		const toMenuButton = this._createToMenuButton();

		const text = this.game.add.text(this.game.width * 0.5, 200, this._winnerPlayer.toString().toUpperCase() + " won", {font:"150px Bulgaria_Moderna", fill:"#000000", align: "center"});
		text.anchor.set(0.5, 0.5);
	}

	_capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

	_createReplayButton() {
		const button = new Button(this.game, "Replay", this._proceedToGameScene);
		button.x = this.game.width * 0.5;
		button.y = this.game.height * 0.5;
		return button;
	}

	_createToMenuButton() {
		const button = new Button(this.game, "Back to menu", this._proceedToMenuScene);
		button.x = this.game.width * 0.5;
		button.y = this.game.height * 0.5 + 110;
		return button;
	}

	_proceedToGameScene() {
		this.game.state.start('Game', true, false, this._playersCount);
	}

	_proceedToMenuScene() {
		this.game.state.start('Menu');
	}
}