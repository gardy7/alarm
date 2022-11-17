radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        basic.showIcon(IconNames.Yes)
        music.stopMelody(MelodyStopOptions.All)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    music.stopMelody(MelodyStopOptions.All)
})
basic.showIcon(IconNames.Skull)
radio.setGroup(255)
basic.forever(function () {
    if (input.acceleration(Dimension.Z) > 312 || input.acceleration(Dimension.Z) < -312) {
        radio.sendNumber(5)
        basic.showIcon(IconNames.No)
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Forever)
    }
})
