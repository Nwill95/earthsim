function generateSquares() {
  for (let j = 0; j < 800 / res; j++) {
    for (let i = 0; i < 800 / res; i++) {
      let z = round(noise(i * xoffset, j * yoffset), 4);
      let a = new Square(i, j, z);
      squares.push(a);
    }
  }
}

class Square {
  constructor(i_, j_, h_, s_) {
    this.i = i_;
    this.j = j_;
    this.h = h_;
    this.type = getType(this.i, this.j, this.h);
  }

  show() {
    noStroke();
    let color = setColor(this.type, this.h);
    fill(color);
    rect(this.i * res, this.j * res, res, res);
  }
}

function setColor(t,h) {
  let c;
  switch (t) {
    case "water":
      c = color(240, 100, 100/h);
      watercount++;
      break;
    case "beach":
      c = color(50, 60, 100/h);
      beachcount++;
      break;
    case "grass":
      c = color(120, (1/dryness)*60, 25/h);
      grasscount++;
      break;
    case "rock":
      c = color(0, 10, 50/h);
      rockcount++;
      break;
    case "peak bare":
      c = color(0,0,25);
      peakcount++;
      break;
    case "snow":
      c = color(0,0,100);
      icecount++;
      break;
    default:
      console.log("Switch statement error");
  }
  return c;
}
