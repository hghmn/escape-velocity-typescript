/**
 * Main (entry) file for this project
 */

import { Canvas, CanvasSettings } from './canvas';

const el: HTMLCanvasElement = document.querySelector('canvas') as HTMLCanvasElement;
const canvas = new Canvas(el, {
    scale: 2,
    w: 510,
    h: 510,
});


function makeRandom(string) {
    var arr = string.split('').map(function(c) {
        return c.charCodeAt(0);
    });

    var parsed = [];

    for (var i = 0; i < arr.length / 2; i++) {
        parsed.push((arr[i] * arr[i + 1]) % 255);
    }

    return parsed;
}

// load some random from the userAgent
var randomness = makeRandom(navigator.userAgent);

var shipLocation: [ number, number ] = [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
];

let velocity = {
    x: 0,
    y: 0
};

function drawShip(ctx: CanvasRenderingContext2D, loc: [ number, number ]) {
    ctx.fillStyle = '#F00';
    ctx.beginPath();
    ctx.moveTo.apply(ctx, loc);
    ctx.lineTo(loc[0] - 2, loc[1] + 4);
    ctx.lineTo(loc[0] + 2, loc[1] + 4);
    ctx.closePath();
    ctx.fill();
}

// loop
function loop(argument) {
    // wipe it every time
    canvas.ctx.clearRect(0, 0, 510, 510);

    // draw the planets
    canvas.ctx.fillStyle = '#333';
    for (var i = 0; i < randomness.length; ) {
        canvas.ctx.fillRect(randomness[i++], randomness[i++], 1, 1);
    }

    // draw the 'ship'
    if (velocity.y > 0.3) {
        velocity.y -= 0.1;
    } else if (velocity.y < -0.3) {
        velocity.y += 0.1;
    } else {
        velocity.y = 0;
    }

    // update location
    shipLocation[1] += velocity.y;
    drawShip(canvas.ctx, shipLocation);

    // loop it
    requestAnimationFrame(loop);
}

// listen for keypress
document.onkeydown = evt => {
    switch (evt.which) {
        case 38: // up
            velocity.y -= 1;
            break;

        case 40: // down
            velocity.y += 1;
            break;

        case 37: // left
            break;

        case 39: // right
            break;


        default: return; // exit this handler for other keys
    }
    evt.preventDefault();
};

document.addEventListener('DOMContentLoaded', loop);
