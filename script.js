var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (lines.length) {
    const nCommands = parseInt(lines.shift())

    if(!nCommands) break;

    const commands = lines.shift().trim().split('');

    let turns = 0;

    commands.forEach((command) => {
        if (command === 'E') {
            turns--;
        } else {
            turns++
        }
    })

    if (turns % 4 === 0) {
        console.log('N');
    } else if ((turns % 4 === 3 || turns % 4 === -1)) {
        console.log('O');
    } else if (turns % 4 === 1 || turns % 4 === -3) {
        console.log('L');
    } else {
        console.log('S');
    }
}