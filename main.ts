basic.forever(function () {
    if (mbit_Sensor.Voice_Sensor(DigitalPin.P0, mbit_Sensor.enVoice.Voice)) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # . .
            . # # . .
            . . # . .
            `)
    }
})
