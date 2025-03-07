input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (BuschtabenNummer + 1 == Buchstaben.length) {
        BuschtabenNummer = 0
        basic.showString("" + (Buchstaben[BuschtabenNummer]))
    } else {
        BuschtabenNummer += 1
        basic.showString("" + (Buchstaben[BuschtabenNummer]))
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    let list: string[] = []
    Sending_text = 0
    list.unshift(Buchstaben[BuschtabenNummer])
})
let Buchstaben: string[] = []
let Sending_text = 0
let BuschtabenNummer = 0
BuschtabenNummer = 0
Sending_text = []
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
" "
]
basic.showString("" + (Buchstaben[BuschtabenNummer]))
basic.forever(function () {
	
})
