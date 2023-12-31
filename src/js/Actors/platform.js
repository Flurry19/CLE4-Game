import * as ex from 'excalibur'
import { Resources, ResourceLoader } from '../resources';


export class PlatformLvlOne extends ex.Actor {
    constructor(x, y, width, height) {
        super({
            pos: new ex.Vector(x, y),
            width: width,
            height: height,
            anchor: ex.Vector.Zero, //Anchors the platforms
            collisionType: ex.CollisionType.Fixed, //Bee bounces against the platforms
            collisionGroup: ex.CollisionGroupManager.groupByName('platform'),//Make sure you bounce against all the platforms
        });
        this.graphics.use(Resources.Platform.toSprite()); //Image of platform
        this.scale = new ex.Vector(0.3, 0.3)
    }
}
export class PlatformLvlTwo extends ex.Actor {
    constructor(x, y) {
        super({
            pos: new ex.Vector(x, y),
            width: 925,
            height: 155,
            anchor: new ex.Vector(0,0),//Anchors the platforms
            collisionType: ex.CollisionType.Fixed, //Bee bounces against the platforms
            collisionGroup: ex.CollisionGroupManager.groupByName('platform'),//Make sure you bounce against all the platforms
        });
        const platform = Resources.PlatformLvlTwo.toSprite()
        platform.width = 925
        platform.height = 155
        this.graphics.add(platform)
        this.scale = new ex.Vector(0.3, 0.3)

    }
}

export class PlatformLvlThree extends ex.Actor {
    constructor(x, y, width, height) {
        super({
            pos: new ex.Vector(x, y),
            width: width,
            height: height,
            anchor: ex.Vector.Zero, //Anchors the platforms
            collisionType: ex.CollisionType.Fixed, //Bee bounces against the platforms
            collisionGroup: ex.CollisionGroupManager.groupByName('platform'),//Make sure you bounce against all the platforms
        });
        this.graphics.use(Resources.PlatformLvlThree.toSprite()); //Image of platform
        this.scale = new ex.Vector(0.3, 0.3)
    }
}