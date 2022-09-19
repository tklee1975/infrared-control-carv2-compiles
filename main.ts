makerbit.onIrButton(IrButton.NUM8, IrButtonAction.Pressed, function () {
    basic.showNumber(8)
})
makerbit.onIrButton(IrButton.NUM6, IrButtonAction.Pressed, function () {
    basic.showNumber(6)
})
makerbit.onIrButton(IrButton.NUM3, IrButtonAction.Pressed, function () {
    basic.showNumber(3)
})
makerbit.onIrButton(IrButton.TLeft, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 100)
    basic.pause(300)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Light, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
})
makerbit.onIrButton(IrButton.NUM9, IrButtonAction.Pressed, function () {
    basic.showNumber(9)
})
makerbit.onIrButton(IrButton.NUM7, IrButtonAction.Pressed, function () {
    basic.showNumber(7)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 100)
    basic.pause(300)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 100)
    basic.pause(300)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Minus, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 100)
    basic.pause(300)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.NUM4, IrButtonAction.Pressed, function () {
    basic.showNumber(4)
})
makerbit.onIrButton(IrButton.NUM2, IrButtonAction.Pressed, function () {
    basic.showNumber(2)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 100)
    basic.pause(300)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.NUM5, IrButtonAction.Pressed, function () {
    basic.showNumber(5)
})
makerbit.onIrButton(IrButton.Power, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
})
makerbit.onIrButton(IrButton.NUM1, IrButtonAction.Pressed, function () {
    basic.showNumber(1)
})
makerbit.onIrButton(IrButton.NUM0, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
})
makerbit.onIrButton(IrButton.BEEP, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
makerbit.onIrButton(IrButton.TRight, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, 100)
    basic.pause(300)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Plus, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
})
makerbit.connectIrReceiver(DigitalPin.P8)
