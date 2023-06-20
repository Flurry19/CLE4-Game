import { ImageSource, Loader } from 'excalibur'

import backgroundImage from "../images/background2.png"
import platformImage from "../images/platform.png"
import spikeImage from "../images/spikes.png"


import beeImage from "../images/bee2.png"
import sadBee from "../images/sadBee.png"
import madBee from "../images/madBee.png"
import happiestBee from "../images/happiestBee.png"

import spiderImage from "../images/spoeder.png"

import flowerImage from "../images/flower.png"

import buttonImage from "../images/button.png"
import startBtnImage from "../images/startButton.png"
import tryAgainBtnImage from "../images/tryAgain.png"
import nextLvlBtnImage from "../images/nextLevelButton.png"
import gameOverBtnImage from "../images/gameOverButton.png"

import logoImage from "../images/logo.png"

import textBubbleImage from "../images/textBubble.png"

import boss from "../images/bossSpider.png"
import honeyBomb from "../images/honeyBomb.png"
import bossWeb from "../images/bossWeb.png"
import bossFloorTemp from "../images/tempFloorBoss.png"
import bossBackground from "../images/bossBackground.png"

import portalImage from "../images/portal.png"

const Resources = {

    Background: new ImageSource(backgroundImage),
    Platform: new ImageSource(platformImage),
    Spikes: new ImageSource(spikeImage),

    Bee: new ImageSource(beeImage),
    SadBee: new ImageSource(sadBee),
    MadBee: new ImageSource(madBee),
    HappiestBee: new ImageSource(happiestBee),

    Spider: new ImageSource(spiderImage),

    Flower: new ImageSource(flowerImage),

    Portal: new ImageSource(portalImage),

    Button: new ImageSource(buttonImage),
    StartBtn: new ImageSource(startBtnImage),
    TryAgainBtn: new ImageSource(tryAgainBtnImage),
    NextLvlBtn: new ImageSource(nextLvlBtnImage),
    GameOverBtn: new ImageSource(gameOverBtnImage),

    Logo: new ImageSource(logoImage),

    TextBubble: new ImageSource(textBubbleImage),

    Boss: new ImageSource(boss),
    HoneyBomb: new ImageSource(honeyBomb),
    BossWeb: new ImageSource(bossWeb),
    TempBossFloor: new ImageSource(bossFloorTemp),
    BossBackground: new ImageSource(bossBackground)


}
const ResourceLoader = new Loader([
    Resources.Background,
    Resources.Platform,
    Resources.Spikes,

    Resources.Bee,
    Resources.SadBee,
    Resources.MadBee,
    Resources.HappiestBee,
    
    Resources.Spider,

    Resources.Flower,

    Resources.Portal,

    Resources.Button,
    Resources.StartBtn,
    Resources.TryAgainBtn,
    Resources.NextLvlBtn,
    Resources.GameOverBtn,

    Resources.Logo,

    Resources.TextBubble,

    Resources.Boss,
    Resources.HoneyBomb,
    Resources.BossWeb,
    Resources.TempBossFloor,
    Resources.BossBackground
])

export { Resources, ResourceLoader }
