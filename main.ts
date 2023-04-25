input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showLeds(`
        . # . # .
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        `)
    radio.sendString("piedra")
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # #
        . # # . .
        . # . . .
        `)
    radio.sendString("tijera")
})
radio.onReceivedString(function (receivedString) {
    let yo = ""
    if (input.buttonIsPressed(Button.A)) {
        if (yo == "tijera") {
            basic.showIcon(IconNames.Happy)
        }
        if (yo == "papel") {
            basic.showIcon(IconNames.Sad)
        }
        if (yo == "piedra") {
            basic.showIcon(IconNames.Asleep)
        }
    }
    if (input.buttonIsPressed(Button.AB)) {
        if (yo == "piedra") {
            basic.showIcon(IconNames.Sad)
        }
        if (yo == "papel") {
            basic.showIcon(IconNames.Happy)
        }
        if (yo == "tijera") {
            basic.showIcon(IconNames.Asleep)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (yo == "papel") {
            basic.showIcon(IconNames.Asleep)
        }
        if (yo == "tijera") {
            basic.showIcon(IconNames.Sad)
        }
        if (yo == "piedra") {
            basic.showIcon(IconNames.Happy)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showLeds(`
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        `)
    radio.sendString("papel")
})
radio.setGroup(9)
