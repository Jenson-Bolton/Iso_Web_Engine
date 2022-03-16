var lastUpdate = Date.now();
var myInterval = setInterval(tick, 0);

class Vector2D {
    constructor(pX, pY) {
        this.x = pX;
        this.y = pY;
    }
}

// Converts a 2d vector between co-ord systems

function isoToCar(pVector2D) {
    let x = pVector2D.x - pVector2D.y;
    let y = (pVector2D.x + pVector2D.y) / 2;
    return new Vector2D(x, y);
}

function carToIso(pVector2D) {
    let x = (2 * pVector2D.y + pVector2D.x) / 2;
    let y = (2 * pVector2D.y + pVector2D.x) / 2;
    return new Vector2D(x, y);
}

/*
function tick() {
    var now = Date.now();
    var dt = now - lastUpdate;
    lastUpdate = now;

    update(dt);
    render(dt);
}

setInterval(tick, 16.666666);

class Engine {
    constructor(pC, pCtx) {
        this.c = pC;
        this.ctx = pCtx
    }
}
*/
