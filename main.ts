radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . # . # .
            . . # . .
            . # . # .
            `)
    }
    if (receivedNumber == 3) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
	
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.TiltRight, function () {
	
})
radio.setGroup(3)
basic.forever(function () {
    radio.sendNumber(0)
})
