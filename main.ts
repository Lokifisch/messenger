input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0x000000)
    if (BuschtabenNummer + 1 == Buchstaben.length) {
        BuschtabenNummer = 0
        basic.showString("" + (Buchstaben[BuschtabenNummer]))
    } else {
        BuschtabenNummer += 1
        basic.showString("" + (Buchstaben[BuschtabenNummer]))
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    radio.sendString(Sending_text)
    basic.showString(Sending_text)
    BuschtabenNummer = 0
    basic.showString("" + (Buchstaben[BuschtabenNummer]))
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.setLedColor(0x0000ff)
    Sending_text = "" + Sending_text + Buchstaben[BuschtabenNummer]
    basic.showString(Sending_text)
    BuschtabenNummer = 0
    basic.setLedColor(0x000000)
    basic.showString("" + (Buchstaben[BuschtabenNummer]))
})
radio.onReceivedString(function (receivedString) {
    basic.setLedColor(0xff0000)
    basic.showString(receivedString)
    basic.showString("" + (Buchstaben[BuschtabenNummer]))
})
let Sending_text = ""
let Buchstaben: string[] = []
let BuschtabenNummer = 0
radio.setGroup(135)
BuschtabenNummer = 0
// The Array(Spookie)
Buchstaben = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"Y",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z",
"!",
"?",
"0",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
" ",
"+",
"-",
"*",
"/",
"%",
"(",
")",
"Hallo!",
"Hi!",
"Super",
"Cool",
"Dumm",
"Kopf"
]
basic.showString("" + (Buchstaben[BuschtabenNummer]))
basic.forever(function () {
	
})
