function DoLED (Step: number) {
    led.toggle(rad, kol)
    rad = (rad + Step) % 5
    if (rad == 0) {
        kol = (kol + Step) % 5
    }
}
let kol = 0
let rad = 0
basic.clearScreen()
basic.forever(function () {
    basic.pause(200)
    DoLED(1)
})
