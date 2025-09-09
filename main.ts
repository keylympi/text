radio.setTransmitPower(7)
loops.everyInterval(1000, function () {
    radio.sendValue("ping", 1)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    music.ringTone(262)
    basic.pause(100)
    basic.clearScreen()
    music.rest(music.beat(BeatFraction.Whole))
})
