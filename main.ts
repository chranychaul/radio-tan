input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("smile")
})
input.onButtonPressed(Button.AB, function () {
    let susto = 0
    basic.clearScreen()
    radio.sendString("" + (susto))
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "smile") {
        basic.showIcon(IconNames.Happy)
    }
    if (receivedString == "sad") {
        basic.showIcon(IconNames.Sad)
    }
    if (receivedString == "susto") {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    let sad = 0
    basic.clearScreen()
    radio.sendString("" + (sad))
})
radio.setGroup(9)
