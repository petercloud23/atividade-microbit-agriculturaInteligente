let correcao = 0
let umidade = 0
basic.forever(function () {
    umidade = pins.analogReadPin(AnalogPin.P0)
    if (umidade < 950) {
        basic.showString("Seca")
    } else {
        basic.showString("Molhada")
    }
    basic.pause(500)
    basic.clearScreen()
    basic.showString("Luminosidade")
    basic.showNumber(Math.round(Math.map(input.lightLevel(), 0, 255, 0, 100)))
    basic.showString("%")
    basic.pause(500)
    basic.clearScreen()
    basic.showString("Temperatura")
    basic.showNumber(input.temperature())
    basic.showString("C")
    basic.pause(500)
    basic.clearScreen()
    if (umidade >= 900) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
        basic.showString("Excesso de Agua")
        led.plotBarGraph(
        umidade,
        1023
        )
        basic.pause(1000)
        basic.clearScreen()
    } else if (umidade <= 600) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
        basic.showString("Falta de Agua")
        led.plotBarGraph(
        umidade,
        1023
        )
        basic.pause(1000)
        basic.clearScreen()
    }
})
