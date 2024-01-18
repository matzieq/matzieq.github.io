let x = 0;
let y= 0;

jb.init({ draw: function() {
    jb.cls()
    jb.spr(1, x, y)
    jb.map()
}, update: function (dt) {
    if (jb.btn(jb.BTN_LEFT)) {
        x -= 200 * dt
    }
    if (jb.btn(jb.BTN_RIGHT)) {
        x += 200 * dt
    }
}})