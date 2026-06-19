var player1 = prompt("Player number one, please enter your name(You will be Blue)")
var player1_color = "#0094f6"
var player2 = prompt("Player number two, please enter your name(You will be Red)")
var player2_color = "#f60039"

var game_on = true
var table = $('table tr')

function changeColor(rowIndex,colIndex,color) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

function returnColor(rowIndex,colIndex) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(colIndex) {
    var colorReport = returnColor(5,colIndex);
    for (var row = 5; row > -1; row--) {
        colorReport = returnColor(row,colIndex);
        if (colorReport === 'rgb(128, 128, 128)') {
            return row
        }
    }
}
