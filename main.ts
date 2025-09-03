input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("")
})
input.onButtonPressed(Button.B, function () {
    textindex += 1
})
let textindex = 0
let text_list: number[] = []
let textarray = [
"A",
"B",
"C",
"D",
"F",
"G",
"H",
"I",
"J",
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
".",
"()"
]
basic.forever(function () {
    basic.showString("" + (textarray[textindex]))
})
