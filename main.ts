radio.onReceivedNumber(function (receivedNumber) {
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("E")
        basic.showNumber(receivedNumber)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString("I")
    basic.showNumber(Tenplnt)
})
let Tenplnt = 0
radio.setGroup(3)
basic.forever(function () {
    Tenplnt = input.temperature()
    Tenplnt = Tenplnt - 2
})
