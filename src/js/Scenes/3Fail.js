import { Scene, Vector } from "excalibur";
import { TryAgainButton } from "../Actors/button.js";
import { FailText } from "./failVictoryActors/text.js";
import { ThreeFailVicBackground } from "./failVictoryActors/background.js";
import failMusic from "../../sounds/sad.mp4"

export class FailThree extends Scene {
    game
    constructor() {
        super();
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
    }

    onActivate(_context) {
        super.onActivate(_context);
        this.failMusic = new Audio(failMusic)
        this.failMusic.loop = true
        this.failMusic.play()
        this.startFailThree()
    }

    startFailThree() {

        this.actors.forEach((actor) => actor.kill());

        let background = new ThreeFailVicBackground(0, 0)
        this.add(background)

        let fail = new FailText(screen.width / 2 - 100, 150)
        this.add(fail)

        console.log('fail two')
        let tryAgain = new TryAgainButton()
        tryAgain.pos = new Vector(670, 450)
        tryAgain.on('pointerup', () => {
            this.game.goToScene('LevelThree')
            this.failMusic.pause()
        })
        this.add(tryAgain)
    }
}

