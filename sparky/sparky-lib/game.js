let x = 0;
let y = 0;

sparky.init({
  draw: function () {
    sparky.cls();
    sparky.spr(1, x, y);
    sparky.map();
  },
  update: function (dt) {
    if (sparky.btn(sparky.BTN_LEFT)) {
      x -= 200 * dt;
    }
    if (sparky.btn(sparky.BTN_RIGHT)) {
      x += 200 * dt;
    }
  },
});
