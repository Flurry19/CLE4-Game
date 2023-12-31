import { Vector, Physics, Scene, Actor, CollisionType } from "excalibur";
import { Resources } from "../resources";

import { BossFloor } from "./bossBottomBorder";
import { BossSpider } from "./boss";
import { MaincharacterBoss } from "./bossCharacter";
import { BackgroundBoss } from "./bossBackground";
import { BossPlatform } from "./bossPlatform";
import { UI } from "./allElementsOnScreen";
import music from "../../sounds/boss.mp3"


export class BossFight extends Scene {

    character;
    boss;
    damage;

    constructor() {

        super({
            width: 854,
            height: 600
        })

        Physics.useRealisticPhysics();
        Physics.gravity = new Vector(0, 800);

    }

    addWebShot(webShoot) {

        this.add(webShoot);
        webShoot.actions.meet(this.character, 380);

    }

    updateBossHealth(hitpoints) {

        this.ui.bossDamaged(hitpoints);

    }

    hearts(value) {

        this.ui.updateHealth(value);

    }

    onActivate(ctx) {
        this.bgMusic = new Audio(music)
        this.bgMusic.loop = true
        this.bgMusic.play()

        this.character.pos = new Vector(400, 0);
        this.boss.pos = new Vector(1000, 480)

        this.character.reset();
        this.boss.bossReset();

        this.ui = new UI();
        this.add(this.ui);
        this.ui.pos = new Vector(10, 30)
    }

    onInitialize(engine) {

        const backgroundBoss = new BackgroundBoss();
        this.add(backgroundBoss);
        backgroundBoss.pos = new Vector(580, 210);

        let leftWall = new Actor({
            pos: new Vector(-10, 0),
            width: 30,
            height: 9000000000,
            collisionType: CollisionType.Fixed
        })

        this.add(leftWall);

        let rightWall = new Actor({
            pos: new Vector(1265, 0),
            width: 30,
            height: 9000000000,
            collisionType: CollisionType.Fixed
        })

        this.add(rightWall);

        const floor = new BossFloor();
        this.add(floor);
        floor.pos = new Vector(427, 640);

        const platformBoss = new BossPlatform();
        this.add(platformBoss);
        platformBoss.pos = new Vector(310, 350)

        this.character = new MaincharacterBoss();
        this.add(this.character);
        this.character.pos = new Vector(400, 0);

        this.boss = new BossSpider();
        this.add(this.boss);
        this.boss.pos = new Vector(1000, 480);
    }

    onDeactivate() {

        this.ui.kill();
        this.bgMusic.pause()
    }
}
